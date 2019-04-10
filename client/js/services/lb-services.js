// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Buscar un elemento relacionado por id para accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Suprimir un elemento relacionado por id para accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Actualizar un elemento relacionado por id para accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Clave foránea para accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * accessTokens consultas de User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Crea una nueva instancia en accessTokens de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Suprime todos los accessTokens de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Recuentos accessTokens de User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * El cuerpo de respuesta contiene propiedades de la AccessToken creada durante el inicio de la sesión.
             * Dependiendo del valor del parámetro `include`, el cuerpo puede contener propiedades adicionales:
             *   - `user` - `U+007BUserU+007D` - Datos del usuario conectado actualmente. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$verify
             * @methodOf lbServices.User
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#setPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Familiar
 * @header lbServices.Familiar
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Familiar` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Familiar",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Familiares/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Familiar.visitas.findById() instead.
            "prototype$__findById__visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/visitas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Familiar.visitas.destroyById() instead.
            "prototype$__destroyById__visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/visitas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.visitas.updateById() instead.
            "prototype$__updateById__visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/visitas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Familiar.profesores.findById() instead.
            "prototype$__findById__profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/:fk",
              method: "GET",
            },

            // INTERNAL. Use Familiar.profesores.destroyById() instead.
            "prototype$__destroyById__profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.profesores.updateById() instead.
            "prototype$__updateById__profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Familiar.profesores.link() instead.
            "prototype$__link__profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Familiar.profesores.unlink() instead.
            "prototype$__unlink__profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.profesores.exists() instead.
            "prototype$__exists__profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Familiar.visitas() instead.
            "prototype$__get__visitas": {
              isArray: true,
              url: urlBase + "/Familiares/:id/visitas",
              method: "GET",
            },

            // INTERNAL. Use Familiar.visitas.create() instead.
            "prototype$__create__visitas": {
              url: urlBase + "/Familiares/:id/visitas",
              method: "POST",
            },

            // INTERNAL. Use Familiar.visitas.destroyAll() instead.
            "prototype$__delete__visitas": {
              url: urlBase + "/Familiares/:id/visitas",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.visitas.count() instead.
            "prototype$__count__visitas": {
              url: urlBase + "/Familiares/:id/visitas/count",
              method: "GET",
            },

            // INTERNAL. Use Familiar.profesores() instead.
            "prototype$__get__profesores": {
              isArray: true,
              url: urlBase + "/Familiares/:id/profesores",
              method: "GET",
            },

            // INTERNAL. Use Familiar.profesores.create() instead.
            "prototype$__create__profesores": {
              url: urlBase + "/Familiares/:id/profesores",
              method: "POST",
            },

            // INTERNAL. Use Familiar.profesores.destroyAll() instead.
            "prototype$__delete__profesores": {
              url: urlBase + "/Familiares/:id/profesores",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.profesores.count() instead.
            "prototype$__count__profesores": {
              url: urlBase + "/Familiares/:id/profesores/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#create
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Familiares",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#patchOrCreate
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Familiares",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#replaceOrCreate
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Familiares/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#upsertWithWhere
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Familiares/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#exists
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Familiares/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#findById
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Familiares/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#replaceById
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Familiares/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#find
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Familiares",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#findOne
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Familiares/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#updateAll
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Familiares/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#deleteById
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Familiares/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#count
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Familiares/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#prototype$patchAttributes
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Familiares/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#createChangeStream
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Familiares/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#puedoVisitar
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Indica el horario en el que se reciben visitas
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `hora` – `{date=}` - El momento en el que el usuario desea ser recibido o el momento actual en caso de que no se haya enviado ninguno
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `horarioValido` – `{string=}` - Indica si el horario es válido o no para la visita
             */
            "puedoVisitar": {
              url: urlBase + "/Familiares/puedoVisitar",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#prototype$getNombre
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Devuelve el nombre de un determinado familiar
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `nombre` – `{object=}` - El nombre del familiar
             */
            "prototype$getNombre": {
              url: urlBase + "/Familiares/:id/getNombre",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#prototype$nuevoFamiliar
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Añadimos un nuevo familiar a un alumno ya existente
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `nombreFamiliar` – `{string}` - El nombre completo del familiar
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `familiar` – `{object=}` - El nuevo familiar creado
             */
            "prototype$nuevoFamiliar": {
              url: urlBase + "/Familiares/:id/otroFamiliar",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Familiar#createMany
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Familiares",
              method: "POST",
            },

            // INTERNAL. Use Visita.familiar() instead.
            "::get::Visita::familiar": {
              url: urlBase + "/Visita/:id/familiar",
              method: "GET",
            },

            // INTERNAL. Use Profesor.familiares.findById() instead.
            "::findById::Profesor::familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/:fk",
              method: "GET",
            },

            // INTERNAL. Use Profesor.familiares.destroyById() instead.
            "::destroyById::Profesor::familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.familiares.updateById() instead.
            "::updateById::Profesor::familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Profesor.familiares.link() instead.
            "::link::Profesor::familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Profesor.familiares.unlink() instead.
            "::unlink::Profesor::familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.familiares.exists() instead.
            "::exists::Profesor::familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Profesor.familiares() instead.
            "::get::Profesor::familiares": {
              isArray: true,
              url: urlBase + "/Profesores/:id/familiares",
              method: "GET",
            },

            // INTERNAL. Use Profesor.familiares.create() instead.
            "::create::Profesor::familiares": {
              url: urlBase + "/Profesores/:id/familiares",
              method: "POST",
            },

            // INTERNAL. Use Profesor.familiares.createMany() instead.
            "::createMany::Profesor::familiares": {
              isArray: true,
              url: urlBase + "/Profesores/:id/familiares",
              method: "POST",
            },

            // INTERNAL. Use Profesor.familiares.destroyAll() instead.
            "::delete::Profesor::familiares": {
              url: urlBase + "/Profesores/:id/familiares",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.familiares.count() instead.
            "::count::Profesor::familiares": {
              url: urlBase + "/Profesores/:id/familiares/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Familiar#upsert
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Familiar#updateOrCreate
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Familiar#patchOrCreateWithWhere
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Familiar#update
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Familiar#destroyById
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Familiar#removeById
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Familiar#prototype$updateAttributes
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Familiar#modelName
        * @propertyOf lbServices.Familiar
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Familiar`.
        */
        R.modelName = "Familiar";

    /**
     * @ngdoc object
     * @name lbServices.Familiar.visitas
     * @header lbServices.Familiar.visitas
     * @object
     * @description
     *
     * The object `Familiar.visitas` groups methods
     * manipulating `Visita` instances related to `Familiar`.
     *
     * Call {@link lbServices.Familiar#visitas Familiar.visitas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Familiar#visitas
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * visitas consultas de Familiar.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::get::Familiar::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.visitas#count
             * @methodOf lbServices.Familiar.visitas
             *
             * @description
             *
             * Recuentos visitas de Familiar.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.visitas.count = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::count::Familiar::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.visitas#create
             * @methodOf lbServices.Familiar.visitas
             *
             * @description
             *
             * Crea una nueva instancia en visitas de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.create = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::create::Familiar::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.visitas#createMany
             * @methodOf lbServices.Familiar.visitas
             *
             * @description
             *
             * Crea una nueva instancia en visitas de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.createMany = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::createMany::Familiar::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.visitas#destroyAll
             * @methodOf lbServices.Familiar.visitas
             *
             * @description
             *
             * Suprime todos los visitas de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.visitas.destroyAll = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::delete::Familiar::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.visitas#destroyById
             * @methodOf lbServices.Familiar.visitas
             *
             * @description
             *
             * Suprimir un elemento relacionado por id para visitas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para visitas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.visitas.destroyById = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::destroyById::Familiar::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.visitas#findById
             * @methodOf lbServices.Familiar.visitas
             *
             * @description
             *
             * Buscar un elemento relacionado por id para visitas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para visitas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.findById = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::findById::Familiar::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.visitas#updateById
             * @methodOf lbServices.Familiar.visitas
             *
             * @description
             *
             * Actualizar un elemento relacionado por id para visitas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `fk` – `{*}` - Clave foránea para visitas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.updateById = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::updateById::Familiar::visitas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Familiar.profesores
     * @header lbServices.Familiar.profesores
     * @object
     * @description
     *
     * The object `Familiar.profesores` groups methods
     * manipulating `Profesor` instances related to `Familiar`.
     *
     * Call {@link lbServices.Familiar#profesores Familiar.profesores()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Familiar#profesores
             * @methodOf lbServices.Familiar
             *
             * @description
             *
             * profesores consultas de Familiar.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesores = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::get::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#count
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Recuentos profesores de Familiar.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.profesores.count = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::count::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#create
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Crea una nueva instancia en profesores de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesores.create = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::create::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#createMany
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Crea una nueva instancia en profesores de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesores.createMany = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::createMany::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#destroyAll
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Suprime todos los profesores de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.profesores.destroyAll = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::delete::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#destroyById
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Suprimir un elemento relacionado por id para profesores.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para profesores
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.profesores.destroyById = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::destroyById::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#exists
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Comprobar la existencia de la relación profesores con un elemento por id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para profesores
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesores.exists = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::exists::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#findById
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Buscar un elemento relacionado por id para profesores.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para profesores
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesores.findById = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::findById::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#link
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Añadir un elemento relacionado por id para profesores.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `fk` – `{*}` - Clave foránea para profesores
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesores.link = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::link::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#unlink
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Eliminar la relación profesores con un elemento por id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para profesores
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.profesores.unlink = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::unlink::Familiar::profesores"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Familiar.profesores#updateById
             * @methodOf lbServices.Familiar.profesores
             *
             * @description
             *
             * Actualizar un elemento relacionado por id para profesores.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Familiar id
             *
             *  - `fk` – `{*}` - Clave foránea para profesores
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesores.updateById = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::updateById::Familiar::profesores"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Visita
 * @header lbServices.Visita
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Visita` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Visita",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Visita/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Visita.familiar() instead.
            "prototype$__get__familiar": {
              url: urlBase + "/Visita/:id/familiar",
              method: "GET",
            },

            // INTERNAL. Use Visita.profesor() instead.
            "prototype$__get__profesor": {
              url: urlBase + "/Visita/:id/profesor",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#create
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Visita",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#patchOrCreate
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Visita",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#replaceOrCreate
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Visita/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#upsertWithWhere
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Visita/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#exists
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Visita/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#findById
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Visita/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#replaceById
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Visita/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#find
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Visita",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#findOne
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Visita/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#updateAll
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Visita/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#deleteById
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Visita/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#count
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Visita/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#prototype$patchAttributes
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Visita id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Visita/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#createChangeStream
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Visita/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Visita#createMany
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Visita",
              method: "POST",
            },

            // INTERNAL. Use Familiar.visitas.findById() instead.
            "::findById::Familiar::visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/visitas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Familiar.visitas.destroyById() instead.
            "::destroyById::Familiar::visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/visitas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.visitas.updateById() instead.
            "::updateById::Familiar::visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/visitas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Familiar.visitas() instead.
            "::get::Familiar::visitas": {
              isArray: true,
              url: urlBase + "/Familiares/:id/visitas",
              method: "GET",
            },

            // INTERNAL. Use Familiar.visitas.create() instead.
            "::create::Familiar::visitas": {
              url: urlBase + "/Familiares/:id/visitas",
              method: "POST",
            },

            // INTERNAL. Use Familiar.visitas.createMany() instead.
            "::createMany::Familiar::visitas": {
              isArray: true,
              url: urlBase + "/Familiares/:id/visitas",
              method: "POST",
            },

            // INTERNAL. Use Familiar.visitas.destroyAll() instead.
            "::delete::Familiar::visitas": {
              url: urlBase + "/Familiares/:id/visitas",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.visitas.count() instead.
            "::count::Familiar::visitas": {
              url: urlBase + "/Familiares/:id/visitas/count",
              method: "GET",
            },

            // INTERNAL. Use Profesor.visitas.findById() instead.
            "::findById::Profesor::visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/visitas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Profesor.visitas.destroyById() instead.
            "::destroyById::Profesor::visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/visitas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.visitas.updateById() instead.
            "::updateById::Profesor::visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/visitas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Profesor.visitas() instead.
            "::get::Profesor::visitas": {
              isArray: true,
              url: urlBase + "/Profesores/:id/visitas",
              method: "GET",
            },

            // INTERNAL. Use Profesor.visitas.create() instead.
            "::create::Profesor::visitas": {
              url: urlBase + "/Profesores/:id/visitas",
              method: "POST",
            },

            // INTERNAL. Use Profesor.visitas.createMany() instead.
            "::createMany::Profesor::visitas": {
              isArray: true,
              url: urlBase + "/Profesores/:id/visitas",
              method: "POST",
            },

            // INTERNAL. Use Profesor.visitas.destroyAll() instead.
            "::delete::Profesor::visitas": {
              url: urlBase + "/Profesores/:id/visitas",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.visitas.count() instead.
            "::count::Profesor::visitas": {
              url: urlBase + "/Profesores/:id/visitas/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Visita#upsert
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Visita#updateOrCreate
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Visita#patchOrCreateWithWhere
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Visita#update
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Visita#destroyById
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Visita#removeById
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Visita#prototype$updateAttributes
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Visita id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Visita#modelName
        * @propertyOf lbServices.Visita
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Visita`.
        */
        R.modelName = "Visita";


            /**
             * @ngdoc method
             * @name lbServices.Visita#familiar
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Capta la relación belongsTo familiar.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Visita id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiar = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::get::Visita::familiar"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Visita#profesor
             * @methodOf lbServices.Visita
             *
             * @description
             *
             * Capta la relación belongsTo profesor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Visita id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R.profesor = function() {
          var TargetResource = $injector.get("Profesor");
          var action = TargetResource["::get::Visita::profesor"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Profesor
 * @header lbServices.Profesor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Profesor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Profesor",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Profesores/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$__findById__accessTokens
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Buscar un elemento relacionado por id para accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Suprimir un elemento relacionado por id para accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$__updateById__accessTokens
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Actualizar un elemento relacionado por id para accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `fk` – `{*}` - Clave foránea para accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Profesor.visitas.findById() instead.
            "prototype$__findById__visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/visitas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Profesor.visitas.destroyById() instead.
            "prototype$__destroyById__visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/visitas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.visitas.updateById() instead.
            "prototype$__updateById__visitas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/visitas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Profesor.familiares.findById() instead.
            "prototype$__findById__familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/:fk",
              method: "GET",
            },

            // INTERNAL. Use Profesor.familiares.destroyById() instead.
            "prototype$__destroyById__familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.familiares.updateById() instead.
            "prototype$__updateById__familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Profesor.familiares.link() instead.
            "prototype$__link__familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Profesor.familiares.unlink() instead.
            "prototype$__unlink__familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.familiares.exists() instead.
            "prototype$__exists__familiares": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Profesores/:id/familiares/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$__get__accessTokens
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * accessTokens consultas de Profesor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Profesores/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$__create__accessTokens
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Crea una nueva instancia en accessTokens de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Profesores/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$__delete__accessTokens
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Suprime todos los accessTokens de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Profesores/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$__count__accessTokens
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Recuentos accessTokens de Profesor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Profesores/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Profesor.visitas() instead.
            "prototype$__get__visitas": {
              isArray: true,
              url: urlBase + "/Profesores/:id/visitas",
              method: "GET",
            },

            // INTERNAL. Use Profesor.visitas.create() instead.
            "prototype$__create__visitas": {
              url: urlBase + "/Profesores/:id/visitas",
              method: "POST",
            },

            // INTERNAL. Use Profesor.visitas.destroyAll() instead.
            "prototype$__delete__visitas": {
              url: urlBase + "/Profesores/:id/visitas",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.visitas.count() instead.
            "prototype$__count__visitas": {
              url: urlBase + "/Profesores/:id/visitas/count",
              method: "GET",
            },

            // INTERNAL. Use Profesor.familiares() instead.
            "prototype$__get__familiares": {
              isArray: true,
              url: urlBase + "/Profesores/:id/familiares",
              method: "GET",
            },

            // INTERNAL. Use Profesor.familiares.create() instead.
            "prototype$__create__familiares": {
              url: urlBase + "/Profesores/:id/familiares",
              method: "POST",
            },

            // INTERNAL. Use Profesor.familiares.destroyAll() instead.
            "prototype$__delete__familiares": {
              url: urlBase + "/Profesores/:id/familiares",
              method: "DELETE",
            },

            // INTERNAL. Use Profesor.familiares.count() instead.
            "prototype$__count__familiares": {
              url: urlBase + "/Profesores/:id/familiares/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#create
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Profesores",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#patchOrCreate
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Profesores",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#replaceOrCreate
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Profesores/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#upsertWithWhere
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Profesores/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#exists
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Profesores/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#findById
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Profesores/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#replaceById
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Profesores/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#find
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Profesores",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#findOne
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Profesores/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#updateAll
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Profesores/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#deleteById
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Profesores/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#count
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Profesores/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$patchAttributes
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Profesores/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#createChangeStream
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Profesores/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#login
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * El cuerpo de respuesta contiene propiedades de la AccessToken creada durante el inicio de la sesión.
             * Dependiendo del valor del parámetro `include`, el cuerpo puede contener propiedades adicionales:
             *   - `user` - `U+007BUserU+007D` - Datos del usuario conectado actualmente. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Profesores/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#logout
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Profesores/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$verify
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Profesores/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#confirm
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Profesores/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#resetPassword
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Profesores/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#changePassword
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Profesores/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#setPassword
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Profesores/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#createMany
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Profesores",
              method: "POST",
            },

            // INTERNAL. Use Familiar.profesores.findById() instead.
            "::findById::Familiar::profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/:fk",
              method: "GET",
            },

            // INTERNAL. Use Familiar.profesores.destroyById() instead.
            "::destroyById::Familiar::profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.profesores.updateById() instead.
            "::updateById::Familiar::profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Familiar.profesores.link() instead.
            "::link::Familiar::profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Familiar.profesores.unlink() instead.
            "::unlink::Familiar::profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.profesores.exists() instead.
            "::exists::Familiar::profesores": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Familiares/:id/profesores/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Familiar.profesores() instead.
            "::get::Familiar::profesores": {
              isArray: true,
              url: urlBase + "/Familiares/:id/profesores",
              method: "GET",
            },

            // INTERNAL. Use Familiar.profesores.create() instead.
            "::create::Familiar::profesores": {
              url: urlBase + "/Familiares/:id/profesores",
              method: "POST",
            },

            // INTERNAL. Use Familiar.profesores.createMany() instead.
            "::createMany::Familiar::profesores": {
              isArray: true,
              url: urlBase + "/Familiares/:id/profesores",
              method: "POST",
            },

            // INTERNAL. Use Familiar.profesores.destroyAll() instead.
            "::delete::Familiar::profesores": {
              url: urlBase + "/Familiares/:id/profesores",
              method: "DELETE",
            },

            // INTERNAL. Use Familiar.profesores.count() instead.
            "::count::Familiar::profesores": {
              url: urlBase + "/Familiares/:id/profesores/count",
              method: "GET",
            },

            // INTERNAL. Use Visita.profesor() instead.
            "::get::Visita::profesor": {
              url: urlBase + "/Visita/:id/profesor",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Profesor#getCurrent
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Profesores" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Profesor#upsert
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Profesor#updateOrCreate
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Profesor#patchOrCreateWithWhere
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Profesor#update
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Profesor#destroyById
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Profesor#removeById
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Profesor#prototype$updateAttributes
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Profesor` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Profesor#getCachedCurrent
         * @methodOf lbServices.Profesor
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Profesor#login} or
         * {@link lbServices.Profesor#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Profesor instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Profesor#isAuthenticated
         * @methodOf lbServices.Profesor
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Profesor#getCurrentId
         * @methodOf lbServices.Profesor
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Profesor#modelName
        * @propertyOf lbServices.Profesor
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Profesor`.
        */
        R.modelName = "Profesor";

    /**
     * @ngdoc object
     * @name lbServices.Profesor.visitas
     * @header lbServices.Profesor.visitas
     * @object
     * @description
     *
     * The object `Profesor.visitas` groups methods
     * manipulating `Visita` instances related to `Profesor`.
     *
     * Call {@link lbServices.Profesor#visitas Profesor.visitas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Profesor#visitas
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * visitas consultas de Profesor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::get::Profesor::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.visitas#count
             * @methodOf lbServices.Profesor.visitas
             *
             * @description
             *
             * Recuentos visitas de Profesor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.visitas.count = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::count::Profesor::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.visitas#create
             * @methodOf lbServices.Profesor.visitas
             *
             * @description
             *
             * Crea una nueva instancia en visitas de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.create = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::create::Profesor::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.visitas#createMany
             * @methodOf lbServices.Profesor.visitas
             *
             * @description
             *
             * Crea una nueva instancia en visitas de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.createMany = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::createMany::Profesor::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.visitas#destroyAll
             * @methodOf lbServices.Profesor.visitas
             *
             * @description
             *
             * Suprime todos los visitas de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.visitas.destroyAll = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::delete::Profesor::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.visitas#destroyById
             * @methodOf lbServices.Profesor.visitas
             *
             * @description
             *
             * Suprimir un elemento relacionado por id para visitas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para visitas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.visitas.destroyById = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::destroyById::Profesor::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.visitas#findById
             * @methodOf lbServices.Profesor.visitas
             *
             * @description
             *
             * Buscar un elemento relacionado por id para visitas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para visitas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.findById = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::findById::Profesor::visitas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.visitas#updateById
             * @methodOf lbServices.Profesor.visitas
             *
             * @description
             *
             * Actualizar un elemento relacionado por id para visitas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `fk` – `{*}` - Clave foránea para visitas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Visita` object.)
             * </em>
             */
        R.visitas.updateById = function() {
          var TargetResource = $injector.get("Visita");
          var action = TargetResource["::updateById::Profesor::visitas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Profesor.familiares
     * @header lbServices.Profesor.familiares
     * @object
     * @description
     *
     * The object `Profesor.familiares` groups methods
     * manipulating `Familiar` instances related to `Profesor`.
     *
     * Call {@link lbServices.Profesor#familiares Profesor.familiares()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Profesor#familiares
             * @methodOf lbServices.Profesor
             *
             * @description
             *
             * familiares consultas de Profesor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiares = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::get::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#count
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Recuentos familiares de Profesor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.familiares.count = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::count::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#create
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Crea una nueva instancia en familiares de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiares.create = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::create::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#createMany
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Crea una nueva instancia en familiares de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiares.createMany = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::createMany::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#destroyAll
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Suprime todos los familiares de este modelo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.familiares.destroyAll = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::delete::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#destroyById
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Suprimir un elemento relacionado por id para familiares.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para familiares
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.familiares.destroyById = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::destroyById::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#exists
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Comprobar la existencia de la relación familiares con un elemento por id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para familiares
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiares.exists = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::exists::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#findById
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Buscar un elemento relacionado por id para familiares.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para familiares
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiares.findById = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::findById::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#link
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Añadir un elemento relacionado por id para familiares.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `fk` – `{*}` - Clave foránea para familiares
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiares.link = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::link::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#unlink
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Eliminar la relación familiares con un elemento por id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Clave foránea para familiares
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.familiares.unlink = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::unlink::Profesor::familiares"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Profesor.familiares#updateById
             * @methodOf lbServices.Profesor.familiares
             *
             * @description
             *
             * Actualizar un elemento relacionado por id para familiares.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Profesor id
             *
             *  - `fk` – `{*}` - Clave foránea para familiares
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Familiar` object.)
             * </em>
             */
        R.familiares.updateById = function() {
          var TargetResource = $injector.get("Familiar");
          var action = TargetResource["::updateById::Profesor::familiares"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
