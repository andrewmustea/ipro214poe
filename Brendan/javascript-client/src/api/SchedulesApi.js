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
    define(['ApiClient', 'model/ActionSetDto', 'model/CreateScheduleDto', 'model/ListDtoEventDto', 'model/ListDtoScheduleDto', 'model/ScheduleDto', 'model/UpdateScheduleActionSetDto', 'model/UpdateScheduleDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActionSetDto'), require('../model/CreateScheduleDto'), require('../model/ListDtoEventDto'), require('../model/ListDtoScheduleDto'), require('../model/ScheduleDto'), require('../model/UpdateScheduleActionSetDto'), require('../model/UpdateScheduleDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.SchedulesApi = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.ActionSetDto, root.GatewaySoftwareApi.CreateScheduleDto, root.GatewaySoftwareApi.ListDtoEventDto, root.GatewaySoftwareApi.ListDtoScheduleDto, root.GatewaySoftwareApi.ScheduleDto, root.GatewaySoftwareApi.UpdateScheduleActionSetDto, root.GatewaySoftwareApi.UpdateScheduleDto);
  }
}(this, function(ApiClient, ActionSetDto, CreateScheduleDto, ListDtoEventDto, ListDtoScheduleDto, ScheduleDto, UpdateScheduleActionSetDto, UpdateScheduleDto) {
  'use strict';

  /**
   * Schedules service.
   * @module api/SchedulesApi
   * @version v1
   */

  /**
   * Constructs a new SchedulesApi. 
   * @alias module:api/SchedulesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the schedulesDelete operation.
     * @callback module:api/SchedulesApi~schedulesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a schedule from the system
     * @param {Number} id the ID of the schedule to be deleted
     * @param {module:api/SchedulesApi~schedulesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.schedulesDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulesDelete");
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
        '/schedules/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesDeleteActionSet operation.
     * @callback module:api/SchedulesApi~schedulesDeleteActionSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unsets the action set assigned to the schedule
     * @param {Number} id the ID of the schedule
     * @param {module:api/SchedulesApi~schedulesDeleteActionSetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.schedulesDeleteActionSet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulesDeleteActionSet");
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
        '/schedules/{id}/actionset', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesGet operation.
     * @callback module:api/SchedulesApi~schedulesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoScheduleDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of schedules in the system
     * @param {module:api/SchedulesApi~schedulesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoScheduleDto}
     */
    this.schedulesGet = function(callback) {
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
      var returnType = ListDtoScheduleDto;

      return this.apiClient.callApi(
        '/schedules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesGetActionSet operation.
     * @callback module:api/SchedulesApi~schedulesGetActionSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionSetDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the action set assigned to the specified schedule
     * @param {Number} id the ID of schedule
     * @param {module:api/SchedulesApi~schedulesGetActionSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionSetDto}
     */
    this.schedulesGetActionSet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulesGetActionSet");
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
      var returnType = ActionSetDto;

      return this.apiClient.callApi(
        '/schedules/{id}/actionset', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesGetEvents operation.
     * @callback module:api/SchedulesApi~schedulesGetEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoEventDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of schedule events
     * @param {Number} id the ID of the schedule
     * @param {module:api/SchedulesApi~schedulesGetEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoEventDto}
     */
    this.schedulesGetEvents = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulesGetEvents");
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
        '/schedules/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesGetSchedule operation.
     * @callback module:api/SchedulesApi~schedulesGetScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduleDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a schedule
     * @param {Number} id the ID of the schedule to be retrieved
     * @param {module:api/SchedulesApi~schedulesGetScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduleDto}
     */
    this.schedulesGetSchedule = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulesGetSchedule");
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
      var returnType = ScheduleDto;

      return this.apiClient.callApi(
        '/schedules/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesPost operation.
     * @callback module:api/SchedulesApi~schedulesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a schedule
     * @param {module:model/CreateScheduleDto} schedule the schedule to be created
     * @param {module:api/SchedulesApi~schedulesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.schedulesPost = function(schedule, callback) {
      var postBody = schedule;

      // verify the required parameter 'schedule' is set
      if (schedule === undefined || schedule === null) {
        throw new Error("Missing the required parameter 'schedule' when calling schedulesPost");
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
        '/schedules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesPut operation.
     * @callback module:api/SchedulesApi~schedulesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a schedule
     * @param {Number} id the ID of the schedule to be updated
     * @param {module:model/UpdateScheduleDto} schedule the updated values for the schedule
     * @param {module:api/SchedulesApi~schedulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.schedulesPut = function(id, schedule, callback) {
      var postBody = schedule;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulesPut");
      }

      // verify the required parameter 'schedule' is set
      if (schedule === undefined || schedule === null) {
        throw new Error("Missing the required parameter 'schedule' when calling schedulesPut");
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
        '/schedules/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schedulesPutActionSet operation.
     * @callback module:api/SchedulesApi~schedulesPutActionSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the action set assigned to the schedule
     * @param {Number} id the ID of the schedule
     * @param {module:model/UpdateScheduleActionSetDto} actionSet the action set
     * @param {module:api/SchedulesApi~schedulesPutActionSetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.schedulesPutActionSet = function(id, actionSet, callback) {
      var postBody = actionSet;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling schedulesPutActionSet");
      }

      // verify the required parameter 'actionSet' is set
      if (actionSet === undefined || actionSet === null) {
        throw new Error("Missing the required parameter 'actionSet' when calling schedulesPutActionSet");
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
        '/schedules/{id}/actionset', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));