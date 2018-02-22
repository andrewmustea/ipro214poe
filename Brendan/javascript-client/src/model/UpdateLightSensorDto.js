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
    root.GatewaySoftwareApi.UpdateLightSensorDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateLightSensorDto model module.
   * @module model/UpdateLightSensorDto
   * @version v1
   */

  /**
   * Constructs a new <code>UpdateLightSensorDto</code>.
   * The light sensor
   * @alias module:model/UpdateLightSensorDto
   * @class
   * @param minSensorLevel {Number} The minimum sensor level
   * @param maxSensorLevel {Number} The maximum sensor level
   * @param minIlluminance {Number} The minimum illuminance
   * @param maxIlluminance {Number} The maximum illuminance
   * @param name {String} The device name
   */
  var exports = function(minSensorLevel, maxSensorLevel, minIlluminance, maxIlluminance, name) {
    var _this = this;

    _this['minSensorLevel'] = minSensorLevel;
    _this['maxSensorLevel'] = maxSensorLevel;
    _this['minIlluminance'] = minIlluminance;
    _this['maxIlluminance'] = maxIlluminance;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>UpdateLightSensorDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateLightSensorDto} obj Optional instance to populate.
   * @return {module:model/UpdateLightSensorDto} The populated <code>UpdateLightSensorDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], 'String');
      }
    }
    return obj;
  }

  /**
   * The minimum sensor level
   * @member {Number} minSensorLevel
   */
  exports.prototype['minSensorLevel'] = undefined;
  /**
   * The maximum sensor level
   * @member {Number} maxSensorLevel
   */
  exports.prototype['maxSensorLevel'] = undefined;
  /**
   * The minimum illuminance
   * @member {Number} minIlluminance
   */
  exports.prototype['minIlluminance'] = undefined;
  /**
   * The maximum illuminance
   * @member {Number} maxIlluminance
   */
  exports.prototype['maxIlluminance'] = undefined;
  /**
   * The device name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The external system's device properties
   * @member {String} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));

