'use strict';

module.exports = function(Visita) {
  Visita.beforeRemote('create', function(context, instance, next) {
    context.args.data.date = new Date();
    context.args.data.profesorId = context.req.accessToken.userId;
    next();
  });

  Visita.valoracionesPositivas = function(cb) {
    var filterValoracionesPositivas = {
      where: {
        rating: {gte: 4},
      },
    };

    Visita.find(filterValoracionesPositivas, cb);
  };

  Visita.valoracionesNegativas = function(cb) {
    var filterValoracionesNegativas = {
      where: {
        rating: {lt: 4},
      },
    };

    Visita.find(filterValoracionesNegativas, cb);
  };
};
