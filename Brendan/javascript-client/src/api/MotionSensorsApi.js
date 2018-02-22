/**
 * Gateway Software API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateMotionSensorDto', 'model/CreateMotionSensorEventDto', 'model/ListDtoEventDto', 'model/ListDtoMotionSensorDto', 'model/MotionSensorDto', 'model/UpdateMotionSensorDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateMotionSensorDto'), require('../model/CreateMotionSensorEventDto'), require('../model/ListDtoEventDto'), require('../model/ListDtoMotionSensorDto'), require('../model/MotionSensorDto'), require('../model/UpdateMotionSensorDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.MotionSensorsApi = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.CreateMotionSensorDto, root.GatewaySoftwareApi.CreateMotionSensorEventDto, root.GatewaySoftwareApi.ListDtoEventDto, root.GatewaySoftwareApi.ListDtoMotionSensorDto, root.GatewaySoftwareApi.MotionSensorDto, root.GatewaySoftwareApi.UpdateMotionSensorDto);
  }
}(this, function(ApiClient, CreateMotionSensorDto, CreateMotionSensorEventDto, ListDtoEventDto, ListDtoMotionSensorDto, MotionSensorDto, UpdateMotionSensorDto) {
  'use strict';

  /**
   * MotionSensors service.
   * @module api/MotionSensorsApi
   * @version v1
   */

  /**
   * Constructs a new MotionSensorsApi. 
   * @alias module:api/MotionSensorsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the motionSensorsDelete operation.
     * @callback module:api/MotionSensorsApi~motionSensorsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a motion sensor from the system
     * @param {Number} id the ID of the motion sensor to be deleted
     * @param {module:api/MotionSensorsApi~motionSensorsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.motionSensorsDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling motionSensorsDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/motionsensors/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the motionSensorsDiscover operation.
     * @callback module:api/MotionSensorsApi~motionSensorsDiscoverCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Discovers all motion sensors in the system
     * @param {module:api/MotionSensorsApi~motionSensorsDiscoverCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.motionSensorsDiscover = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/motionsensors/discover', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the motionSensorsEventPost operation.
     * @callback module:api/MotionSensorsApi~motionSensorsEventPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a motion sensor event
     * @param {Number} id the ID of the motion sensor
     * @param {module:model/CreateMotionSensorEventDto} event the event to be created
     * @param {module:api/MotionSensorsApi~motionSensorsEventPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.motionSensorsEventPost = function(id, event, callback) {
      var postBody = event;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling motionSensorsEventPost");
      }

      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling motionSensorsEventPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/motionsensors/{id}/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the motionSensorsGet operation.
     * @callback module:api/MotionSensorsApi~motionSensorsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoMotionSensorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of all motion sensors in the system
     * @param {module:api/MotionSensorsApi~motionSensorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoMotionSensorDto}
     */
    this.motionSensorsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = ListDtoMotionSensorDto;

      return this.apiClient.callApi(
        '/motionsensors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the motionSensorsGetEvents operation.
     * @callback module:api/MotionSensorsApi~motionSensorsGetEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoEventDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of motion sensor events
     * @param {Number} id the ID of the motion sensor
     * @param {module:api/MotionSensorsApi~motionSensorsGetEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoEventDto}
     */
    this.motionSensorsGetEvents = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling motionSensorsGetEvents");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = ListDtoEventDto;

      return this.apiClient.callApi(
        '/motionsensors/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the motionSensorsGetMotionSensor operation.
     * @callback module:api/MotionSensorsApi~motionSensorsGetMotionSensorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MotionSensorDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a motion sensor
     * @param {Number} id the ID of the motion sensor to be retrieved
     * @param {module:api/MotionSensorsApi~motionSensorsGetMotionSensorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MotionSensorDto}
     */
    this.motionSensorsGetMotionSensor = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling motionSensorsGetMotionSensor");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = MotionSensorDto;

      return this.apiClient.callApi(
        '/motionsensors/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the motionSensorsPost operation.
     * @callback module:api/MotionSensorsApi~motionSensorsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a motion sensor
     * @param {module:model/CreateMotionSensorDto} motionSensor the motion sensor to be created
     * @param {module:api/MotionSensorsApi~motionSensorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.motionSensorsPost = function(motionSensor, callback) {
      var postBody = motionSensor;

      // verify the required parameter 'motionSensor' is set
      if (motionSensor === undefined || motionSensor === null) {
        throw new Error("Missing the required parameter 'motionSensor' when calling motionSensorsPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/motionsensors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the motionSensorsPut operation.
     * @callback module:api/MotionSensorsApi~motionSensorsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a motion sensor
     * @param {Number} id the ID of the motion sensor to be updated
     * @param {module:model/UpdateMotionSensorDto} motionSensor a motion sensor containing the new values
     * @param {module:api/MotionSensorsApi~motionSensorsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.motionSensorsPut = function(id, motionSensor, callback) {
      var postBody = motionSensor;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling motionSensorsPut");
      }

      // verify the required parameter 'motionSensor' is set
      if (motionSensor === undefined || motionSensor === null) {
        throw new Error("Missing the required parameter 'motionSensor' when calling motionSensorsPut");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/motionsensors/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));