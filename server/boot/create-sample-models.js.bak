var async = require('async');

module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoDs; // 'name' of your mongo connector, you can find it in datasource.json
  var mysqlDs = app.dataSources.mysqlDs;
  //create all models
  async.parallel({
    profesores: async.apply(createProfesores),
    familiares: async.apply(createFamiliares),
  }, function(err, results) {
    if (err) throw err;
    createVisitas(results.profesores, results.familiares, function(err) {
      console.log('> models created sucessfully');
    });
  });
  
  //create profesores
  function createProfesores(cb) {
    mongoDs.automigrate('Profesor', function(err) {
      if (err) return cb(err);
      var Profesor = app.models.Profesor;
      Profesor.create([{
        email: 'foo@bar.com',
        password: 'foobar',
        nombre: 'Pepe',
        apellidos: 'Pérez'
      }, {
        email: 'john@doe.com',
        password: 'johndoe'
      }, {
        email: 'jane@doe.com',
        password: 'janedoe'
      }], cb);
    });
  }
  
  //create familiares
  function createFamiliares(cb) {
    mysqlDs.automigrate('Familiar', function(err) {
        if (err) throw err;

        app.models.Familiar.create([{
          nombre: 'Pepe Pérez',
          alumno: 'Pepa Pérea'
        }, {
          nombre: 'Juana López',
          alumno: 'Juan López'
        }, {
          nombre: 'M. Carmen Fernández',
          alumno: 'Manuel Fernández'
        }], cb);
    });
  }
  
  //create visitas
  function createVisitas(profesores, familiares, cb) {
    mongoDs.automigrate('Visita', function(err) {
      if (err) return cb(err);
      var Visita = app.models.Visita;
      var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
      Visita.create([{
        date: Date.now() - (DAY_IN_MILLISECONDS * 4),
        rating: 5,
        comments: 'A very good coffee shop.',
        profesorId: profesores[0].id,
        familiarId: familiares[0].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 3),
        rating: 5,
        comments: 'Quite pleasant.',
        profesorId: profesores[1].id,
        familiarId: familiares[0].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS * 2),
        rating: 4,
        comments: 'It was ok.',
        profesorId: profesores[1].id,
        familiarId: familiares[1].id,
      }, {
        date: Date.now() - (DAY_IN_MILLISECONDS),
        rating: 4,
        comments: 'I go here everyday.',
        profesorId: profesores[2].id,
        familiarId: familiares[2].id,
      }], cb);
    });
  }
};

