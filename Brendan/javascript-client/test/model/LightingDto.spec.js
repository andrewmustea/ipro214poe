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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GatewaySoftwareApi);
  }
}(this, function(expect, GatewaySoftwareApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GatewaySoftwareApi.LightingDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LightingDto', function() {
    it('should create an instance of LightingDto', function() {
      // uncomment below and update the code to test LightingDto
      //var instane = new GatewaySoftwareApi.LightingDto();
      //expect(instance).to.be.a(GatewaySoftwareApi.LightingDto);
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new GatewaySoftwareApi.LightingDto();
      //expect(instance).to.be();
    });

    it('should have the property kelvin (base name: "kelvin")', function() {
      // uncomment below and update the code to test the property kelvin
      //var instane = new GatewaySoftwareApi.LightingDto();
      //expect(instance).to.be();
    });

    it('should have the property behavior (base name: "behavior")', function() {
      // uncomment below and update the code to test the property behavior
      //var instane = new GatewaySoftwareApi.LightingDto();
      //expect(instance).to.be();
    });

    it('should have the property curveType (base name: "curveType")', function() {
      // uncomment below and update the code to test the property curveType
      //var instane = new GatewaySoftwareApi.LightingDto();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new GatewaySoftwareApi.LightingDto();
      //expect(instance).to.be();
    });

  });

}));
