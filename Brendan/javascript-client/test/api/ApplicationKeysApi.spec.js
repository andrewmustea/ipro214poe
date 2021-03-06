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
    instance = new GatewaySoftwareApi.ApplicationKeysApi();
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

  describe('ApplicationKeysApi', function() {
    describe('applicationKeysDelete', function() {
      it('should call applicationKeysDelete successfully', function(done) {
        //uncomment below and update the code to test applicationKeysDelete
        //instance.applicationKeysDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('applicationKeysGet', function() {
      it('should call applicationKeysGet successfully', function(done) {
        //uncomment below and update the code to test applicationKeysGet
        //instance.applicationKeysGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('applicationKeysGetApplicationKey', function() {
      it('should call applicationKeysGetApplicationKey successfully', function(done) {
        //uncomment below and update the code to test applicationKeysGetApplicationKey
        //instance.applicationKeysGetApplicationKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('applicationKeysPost', function() {
      it('should call applicationKeysPost successfully', function(done) {
        //uncomment below and update the code to test applicationKeysPost
        //instance.applicationKeysPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('applicationKeysPut', function() {
      it('should call applicationKeysPut successfully', function(done) {
        //uncomment below and update the code to test applicationKeysPut
        //instance.applicationKeysPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
