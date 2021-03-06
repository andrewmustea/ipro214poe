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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.LightSensorDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LightSensorDto model module.
   * @module model/LightSensorDto
   * @version v1
   */

  /**
   * Constructs a new <code>LightSensorDto</code>.
   * @alias module:model/LightSensorDto
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;











  };

  /**
   * Constructs a <code>LightSensorDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LightSensorDto} obj Optional instance to populate.
   * @return {module:model/LightSensorDto} The populated <code>LightSensorDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('discoveredDate')) {
        obj['discoveredDate'] = ApiClient.convertToType(data['discoveredDate'], 'Date');
      }
      if (data.hasOwnProperty('isOnline')) {
        obj['isOnline'] = ApiClient.convertToType(data['isOnline'], 'Boolean');
      }
      if (data.hasOwnProperty('minSensorLevel')) {
        obj['minSensorLevel'] = ApiClient.convertToType(data['minSensorLevel'], 'Number');
      }
      if (data.hasOwnProperty('maxSensorLevel')) {
        obj['maxSensorLevel'] = ApiClient.convertToType(data['maxSensorLevel'], 'Number');
      }
      if (data.hasOwnProperty('minIlluminance')) {
        obj['minIlluminance'] = ApiClient.convertToType(data['minIlluminance'], 'Number');
      }
      if (data.hasOwnProperty('maxIlluminance')) {
        obj['maxIlluminance'] = ApiClient.convertToType(data['maxIlluminance'], 'Number');
      }
      if (data.hasOwnProperty('sensorLevel')) {
        obj['sensorLevel'] = ApiClient.convertToType(data['sensorLevel'], 'Number');
      }
      if (data.hasOwnProperty('illuminance')) {
        obj['illuminance'] = ApiClient.convertToType(data['illuminance'], 'Number');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * @member {String} externalId
   */
  exports.prototype['externalId'] = undefined;
  /**
   * @member {Date} discoveredDate
   */
  exports.prototype['discoveredDate'] = undefined;
  /**
   * @member {Boolean} isOnline
   */
  exports.prototype['isOnline'] = undefined;
  /**
   * @member {Number} minSensorLevel
   */
  exports.prototype['minSensorLevel'] = undefined;
  /**
   * @member {Number} maxSensorLevel
   */
  exports.prototype['maxSensorLevel'] = undefined;
  /**
   * @member {Number} minIlluminance
   */
  exports.prototype['minIlluminance'] = undefined;
  /**
   * @member {Number} maxIlluminance
   */
  exports.prototype['maxIlluminance'] = undefined;
  /**
   * @member {Number} sensorLevel
   */
  exports.prototype['sensorLevel'] = undefined;
  /**
   * @member {Number} illuminance
   */
  exports.prototype['illuminance'] = undefined;
  /**
   * @member {String} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


