'use strict';

module.exports = function(Profesor) {
  Profesor.beforeRemote('prototype.__create__visitas', function(context, instance, next) {
    var fechaManyana = new Date();
    fechaManyana.setDate(fechaManyana.getDate() + 10);
    context.args.data.date = fechaManyana;
    next();
  });
};
