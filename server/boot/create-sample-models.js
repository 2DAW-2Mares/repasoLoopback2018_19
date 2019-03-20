module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Familiar', function(err) {
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
    }], function(err, familiares) {
      if (err) throw err;

      console.log('Models created: \n', familiares);
    });
  });
};

