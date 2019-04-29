var async = require('async');

module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoDs; // 'name' of your mongo connector, you can find it in datasource.json
  var mysqlDs = app.dataSources.mysqlDs;
  
  mongoDs.automigrate(null, function(err) {
    if (err) return cb(err);
    mysqlDs.automigrate(null, function(err) {
        if (err) throw err;


        //create all models
        async.parallel({
          profesores: async.apply(createProfesores),
          familiares: async.apply(createFamiliares),
          alumnos: async.apply(createAlumnos),
        }, function(err, results) {
          if (err) throw err;

          createVisitas(results.profesores, results.familiares, function(err, visitas){
              if (err) throw err;
              createAluFamiliares(results.alumnos, results.familiares, function(err){
                  if (err) throw err;
                  createAluProfesores(results.alumnos, results.profesores, function(err){
                      if (err) throw err;
                      console.log('> models created sucessfully');
                  });
              });
          });
        });
        });
    });
    
  
  //create profesores
  function createProfesores(cb) {
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
  }
  
  //create familiares
  function createFamiliares(cb) {
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
  }
  
  //create alumnos
  function createAlumnos(cb) {
        app.models.Alumno.create([{
            nre: 1234,
            nombre: 'Pepe',
            apellidos: 'Pérez',
            email: '1234@alu.murciaeduca.es',
        },{
            nre: 12345,
            nombre: 'Pepe',
            apellidos: 'Pérez',
            email: '12345@alu.murciaeduca.es',
        },{
            nre: 12346,
            nombre: 'Pepe',
            apellidos: 'Pérez',
            email: '12346@alu.murciaeduca.es',
        },{
            nre: 12347,
            nombre: 'Pepe',
            apellidos: 'Pérez',
            email: '12347@alu.murciaeduca.es',
        }], cb);
  }
  
  //create visitas
  function createVisitas(profesores, familiares, cb) {
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
  }

  function createAluProfesores(alumnos, profesores, cb) {
      alumnos[1].profesores.add(profesores[0].id, cb)
  }

  function createAluFamiliares(alumnos, familiares, cb) {
      alumnos[1].familiares.add(familiares[0].id, cb)
  }
};

