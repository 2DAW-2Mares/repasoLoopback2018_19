'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  router.get('/horarios', function(req, res) {
    var OPEN_HOUR = new Date();
    OPEN_HOUR.setHours(8);
    OPEN_HOUR.setMinutes(15);
    OPEN_HOUR.setSeconds(0);

    var CLOSE_HOUR = new Date();
    CLOSE_HOUR.setHours(14);
    CLOSE_HOUR.setMinutes(15);
    CLOSE_HOUR.setSeconds(0);
    
    var horario = {
        apertura: OPEN_HOUR.getHours() + ":" + OPEN_HOUR.getMinutes(),
        cierre: CLOSE_HOUR.getHours() + ":" + CLOSE_HOUR.getMinutes()
    };

    res.json(horario);
  });
  
  server.use(router);
};
