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
    instance = new GatewaySoftwareApi.SchedulesApi();
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

  describe('SchedulesApi', function() {
    describe('schedulesDelete', function() {
      it('should call schedulesDelete successfully', function(done) {
        //uncomment below and update the code to test schedulesDelete
        //instance.schedulesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesDeleteActionSet', function() {
      it('should call schedulesDeleteActionSet successfully', function(done) {
        //uncomment below and update the code to test schedulesDeleteActionSet
        //instance.schedulesDeleteActionSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesGet', function() {
      it('should call schedulesGet successfully', function(done) {
        //uncomment below and update the code to test schedulesGet
        //instance.schedulesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesGetActionSet', function() {
      it('should call schedulesGetActionSet successfully', function(done) {
        //uncomment below and update the code to test schedulesGetActionSet
        //instance.schedulesGetActionSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesGetEvents', function() {
      it('should call schedulesGetEvents successfully', function(done) {
        //uncomment below and update the code to test schedulesGetEvents
        //instance.schedulesGetEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesGetSchedule', function() {
      it('should call schedulesGetSchedule successfully', function(done) {
        //uncomment below and update the code to test schedulesGetSchedule
        //instance.schedulesGetSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesPost', function() {
      it('should call schedulesPost successfully', function(done) {
        //uncomment below and update the code to test schedulesPost
        //instance.schedulesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesPut', function() {
      it('should call schedulesPut successfully', function(done) {
        //uncomment below and update the code to test schedulesPut
        //instance.schedulesPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schedulesPutActionSet', function() {
      it('should call schedulesPutActionSet successfully', function(done) {
        //uncomment below and update the code to test schedulesPutActionSet
        //instance.schedulesPutActionSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
