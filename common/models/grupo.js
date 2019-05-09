'use strict';

module.exports = function(Grupo) {
  Grupo.beforeRemote('create', function (context, instance, next) {
    context.args.data.tutor = context.req.accessToken.userId;
    next();
  });
  
  Grupo.beforeRemote('create', function (context, instance, next) {
    var nivel = context.args.data.nivel;
    if(nivel != 'E.S.O.' && nivel != 'Bachillerato' && nivel != 'F.P.') {
       next(new Error('Ese nivel no es posible'));
    } else {
      next();
    }
  });

/**
 * Los grupos de un determinado nivel
 * @param {string} nivel El nivel del que se quieren obtener los grupos
 * @param {Function(Error, array)} callback
 */

  Grupo.getByNivel = function(nivel, callback) {
    var filtro = {
		where: {
			nivel: nivel
		},
		include: 'profesorTutor'
	};
    Grupo.find(filtro, function(err, gruposDelNivel){
    	callback(null, gruposDelNivel);
    });

  };


};
