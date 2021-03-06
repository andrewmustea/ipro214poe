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
    instance = new GatewaySoftwareApi.MotionSensorsApi();
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

  describe('MotionSensorsApi', function() {
    describe('motionSensorsDelete', function() {
      it('should call motionSensorsDelete successfully', function(done) {
        //uncomment below and update the code to test motionSensorsDelete
        //instance.motionSensorsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('motionSensorsDiscover', function() {
      it('should call motionSensorsDiscover successfully', function(done) {
        //uncomment below and update the code to test motionSensorsDiscover
        //instance.motionSensorsDiscover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('motionSensorsEventPost', function() {
      it('should call motionSensorsEventPost successfully', function(done) {
        //uncomment below and update the code to test motionSensorsEventPost
        //instance.motionSensorsEventPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('motionSensorsGet', function() {
      it('should call motionSensorsGet successfully', function(done) {
        //uncomment below and update the code to test motionSensorsGet
        //instance.motionSensorsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('motionSensorsGetEvents', function() {
      it('should call motionSensorsGetEvents successfully', function(done) {
        //uncomment below and update the code to test motionSensorsGetEvents
        //instance.motionSensorsGetEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('motionSensorsGetMotionSensor', function() {
      it('should call motionSensorsGetMotionSensor successfully', function(done) {
        //uncomment below and update the code to test motionSensorsGetMotionSensor
        //instance.motionSensorsGetMotionSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('motionSensorsPost', function() {
      it('should call motionSensorsPost successfully', function(done) {
        //uncomment below and update the code to test motionSensorsPost
        //instance.motionSensorsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('motionSensorsPut', function() {
      it('should call motionSensorsPut successfully', function(done) {
        //uncomment below and update the code to test motionSensorsPut
        //instance.motionSensorsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
