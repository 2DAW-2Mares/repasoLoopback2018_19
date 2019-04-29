'use strict';
var _ = require('lodash');
var async = require('async');

module.exports = function(Profesor) {
  Profesor.beforeRemote('prototype.__create__visitas', function(context, instance, next) {
    var fechaManyana = new Date();
    fechaManyana.setDate(fechaManyana.getDate() + 10);
    context.args.data.date = fechaManyana;
    next();
  });

  Profesor.beforeRemote('prototype.__create__visitas', function(context, instance, next) {
    var familiarId = context.args.data.familiarId;
    var Familiar = Profesor.app.models.Familiar;
    
    Familiar.findById(familiarId, function(err, familiar){
        familiar.alumnos(function(err, alumnos){
            console.log(alumnos);
            next();
        });
    });
  });


  /**
   * Muestra los profesores que, teniendo valoraciones positivas,
   * no tienen ninguna valoración negativa.
   * @param {Function(Error, array)} callback
   */

  Profesor.buenos = function(callback) {

    async.parallel({
      docentesValoracionesPositivas: async.apply(Profesor.valoracionesPositivas),
      docentesValoracionesNegativas: async.apply(Profesor.valoracionesNegativas),
    }, function(err, results) {
      if (err) callback(err);
      var docentesValoracionesPositivas =
        _.filter(results.docentesValoracionesPositivas, function(o) {
          let visitas = o.visitas();
          return (visitas.length > 0);
        });
      var docentesValoracionesNegativas =
        _.filter(results.docentesValoracionesNegativas, function(o) {
          let visitas = o.visitas();
          return (visitas.length > 0);
        });

      var docentesBuenos =
        _.differenceBy(docentesValoracionesPositivas, docentesValoracionesNegativas, 'id');
      callback(null, docentesBuenos);
    });

  };

  Profesor.valoracionesPositivas = function(cb) {
    var filterValoracionesPositivas = {
      include: {
        relation: 'visitas',
        scope: {
          where: {
            rating: {gte: 4},
          },
        },
      },
    };

    Profesor.find(filterValoracionesPositivas, cb);
  };

  Profesor.valoracionesNegativas = function(cb) {
    var filterValoracionesNegativas = {
      include: {
        relation: 'visitas',
        scope: {
          where: {
            rating: {lt: 4},
          },
        },
      },
    };

    Profesor.find(filterValoracionesNegativas, cb);
  };

  /**
   * Muestra los profesores que, teniendo valoraciones positivas,
   * no tienen ninguna valoración negativa.
   * @param {Function(Error, array)} callback
   * SELECT * FROM visitasDocentes.Profesor
   * WHERE
   * id IN (SELECT profesorId FROM Visita WHERE rating >= 4)
   * AND
   * id NOT IN (SELECT profesorId FROM Visita WHERE rating < 4);
   */

  Profesor.buenosII = function(callback) {
    var Visita = Profesor.app.models.Visita;

    async.parallel({
      valoracionesPositivas: async.apply(Visita.valoracionesPositivas),
      valoracionesNegativas: async.apply(Visita.valoracionesNegativas),
    }, function(err, results) {
      if (err) callback(err);

      let docentesValoracionesPositasSinNegativas =
        _.differenceBy(results.valoracionesPositivas, results.valoracionesNegativas, 'profesorId');
      let docentesValoracionesPositasSinNegativasId =
        _.map(docentesValoracionesPositasSinNegativas, 'profesorId');
      Profesor.find({where: {id: {inq: docentesValoracionesPositasSinNegativasId}}}, callback);
    });
  };
  
    /**
     * Muestra los familiares que han visitado a un determinado docente
     * @param {Function(Error, array)} callback
     */

    Profesor.prototype.familiaresVisitantes = function(callback) {
      var esteProfesor = this;
      esteProfesor.familiares(function(err, familiares){
          if(err) callback(err);
          let familiaresSinDuplicados = 
                  _.uniqBy(familiares, 'id');
          callback(err, familiaresSinDuplicados);
      });
    };

    /**
     * Muestra los familiares que no han visitado a un determinado docente
     * @param {Function(Error, array)} callback
     */

    Profesor.prototype.familiaresNoVisitantes = function(callback) {
      var Familiar = Profesor.app.models.Familiar;
      var esteProfesor = this;
      esteProfesor.familiares(function(err, familiares){
          if(err) callback(err);
          let familiaresSinDuplicados = 
                  _.uniqBy(familiares, 'id');
          Familiar.find(function(err, todosLosFamiliares){
            let familiaresNoVisitantes = 
                _.differenceBy(todosLosFamiliares, familiaresSinDuplicados, 'id');
                        
            callback(err, familiaresNoVisitantes);
          });

      });
    };


};
