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
    define(['ApiClient', 'model/BatchLightingListDto', 'model/CreateLightDto', 'model/EmergencyLightingSettingsDto', 'model/LightDto', 'model/LightingDto', 'model/ListDtoEventDto', 'model/ListDtoLightDto', 'model/UpdateLightDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BatchLightingListDto'), require('../model/CreateLightDto'), require('../model/EmergencyLightingSettingsDto'), require('../model/LightDto'), require('../model/LightingDto'), require('../model/ListDtoEventDto'), require('../model/ListDtoLightDto'), require('../model/UpdateLightDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.LightsApi = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.BatchLightingListDto, root.GatewaySoftwareApi.CreateLightDto, root.GatewaySoftwareApi.EmergencyLightingSettingsDto, root.GatewaySoftwareApi.LightDto, root.GatewaySoftwareApi.LightingDto, root.GatewaySoftwareApi.ListDtoEventDto, root.GatewaySoftwareApi.ListDtoLightDto, root.GatewaySoftwareApi.UpdateLightDto);
  }
}(this, function(ApiClient, BatchLightingListDto, CreateLightDto, EmergencyLightingSettingsDto, LightDto, LightingDto, ListDtoEventDto, ListDtoLightDto, UpdateLightDto) {
  'use strict';

  /**
   * Lights service.
   * @module api/LightsApi
   * @version v1
   */

  /**
   * Constructs a new LightsApi. 
   * @alias module:api/LightsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the lightsBatchLighting operation.
     * @callback module:api/LightsApi~lightsBatchLightingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets lighting on multiple lights
     * @param {module:model/BatchLightingListDto} lighting the ID and lighting settings for each light
     * @param {module:api/LightsApi~lightsBatchLightingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsBatchLighting = function(lighting, callback) {
      var postBody = lighting;

      // verify the required parameter 'lighting' is set
      if (lighting === undefined || lighting === null) {
        throw new Error("Missing the required parameter 'lighting' when calling lightsBatchLighting");
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/lights/lighting', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsDelete operation.
     * @callback module:api/LightsApi~lightsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a light from the system
     * @param {Number} id the ID of the light to be deleted
     * @param {module:api/LightsApi~lightsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsDelete");
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
        '/lights/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsDeleteEmergencySettings operation.
     * @callback module:api/LightsApi~lightsDeleteEmergencySettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes emergency light settings from a light
     * @param {Number} id the ID of the light
     * @param {module:api/LightsApi~lightsDeleteEmergencySettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsDeleteEmergencySettings = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsDeleteEmergencySettings");
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
        '/lights/{id}/emergency-settings', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsDiscover operation.
     * @callback module:api/LightsApi~lightsDiscoverCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Discovers all lights in the system
     * @param {module:api/LightsApi~lightsDiscoverCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsDiscover = function(callback) {
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
        '/lights/discover', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsGet operation.
     * @callback module:api/LightsApi~lightsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoLightDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of all lights in the system
     * @param {module:api/LightsApi~lightsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoLightDto}
     */
    this.lightsGet = function(callback) {
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
      var returnType = ListDtoLightDto;

      return this.apiClient.callApi(
        '/lights', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsGetEvents operation.
     * @callback module:api/LightsApi~lightsGetEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoEventDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of light events
     * @param {Number} id the ID of the light
     * @param {module:api/LightsApi~lightsGetEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoEventDto}
     */
    this.lightsGetEvents = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsGetEvents");
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
        '/lights/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsGetLight operation.
     * @callback module:api/LightsApi~lightsGetLightCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LightDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a light
     * @param {Number} id the ID of the light to be retrieved
     * @param {module:api/LightsApi~lightsGetLightCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LightDto}
     */
    this.lightsGetLight = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsGetLight");
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
      var returnType = LightDto;

      return this.apiClient.callApi(
        '/lights/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsLighting operation.
     * @callback module:api/LightsApi~lightsLightingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dims a light to a specified level
     * @param {Number} id the ID of the light to be dimmed
     * @param {module:model/LightingDto} lighting the new lighting settings for the light
     * @param {module:api/LightsApi~lightsLightingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsLighting = function(id, lighting, callback) {
      var postBody = lighting;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsLighting");
      }

      // verify the required parameter 'lighting' is set
      if (lighting === undefined || lighting === null) {
        throw new Error("Missing the required parameter 'lighting' when calling lightsLighting");
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
        '/lights/{id}/lighting', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsPost operation.
     * @callback module:api/LightsApi~lightsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a light
     * @param {module:model/CreateLightDto} light the light to be created
     * @param {module:api/LightsApi~lightsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsPost = function(light, callback) {
      var postBody = light;

      // verify the required parameter 'light' is set
      if (light === undefined || light === null) {
        throw new Error("Missing the required parameter 'light' when calling lightsPost");
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
        '/lights', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsPostEmergencySettings operation.
     * @callback module:api/LightsApi~lightsPostEmergencySettingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets a light as an emergency light
     * @param {Number} id the ID of the light
     * @param {module:model/EmergencyLightingSettingsDto} settings the emergency light settings
     * @param {module:api/LightsApi~lightsPostEmergencySettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsPostEmergencySettings = function(id, settings, callback) {
      var postBody = settings;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsPostEmergencySettings");
      }

      // verify the required parameter 'settings' is set
      if (settings === undefined || settings === null) {
        throw new Error("Missing the required parameter 'settings' when calling lightsPostEmergencySettings");
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
        '/lights/{id}/emergency-settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsPut operation.
     * @callback module:api/LightsApi~lightsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a light
     * @param {Number} id the ID of the light to be updated
     * @param {module:model/UpdateLightDto} light a light containing the new values
     * @param {module:api/LightsApi~lightsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsPut = function(id, light, callback) {
      var postBody = light;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsPut");
      }

      // verify the required parameter 'light' is set
      if (light === undefined || light === null) {
        throw new Error("Missing the required parameter 'light' when calling lightsPut");
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
        '/lights/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsTurnOff operation.
     * @callback module:api/LightsApi~lightsTurnOffCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Turns off a light
     * @param {Number} id the ID of the light to be turned off
     * @param {module:api/LightsApi~lightsTurnOffCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsTurnOff = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsTurnOff");
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
        '/lights/{id}/turnoff', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lightsTurnOn operation.
     * @callback module:api/LightsApi~lightsTurnOnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Turns on a light
     * @param {Number} id the ID of the light to be turned on
     * @param {module:api/LightsApi~lightsTurnOnCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.lightsTurnOn = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lightsTurnOn");
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
        '/lights/{id}/turnon', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));