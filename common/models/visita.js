'use strict';

module.exports = function(Visita) {
  Visita.beforeRemote('create', function(context, instance, next) {
    context.args.data.date = new Date();
    context.args.data.profesorId = context.req.accessToken.userId;
    next();
  });
};
