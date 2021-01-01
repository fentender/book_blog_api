/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 0.0.6
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
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
    factory(root.expect, root.BookBlogApi);
  }
}(this, function(expect, BookBlogApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Token', function() {
      beforeEach(function() {
        instance = new BookBlogApi.Token();
      });

      it('should create an instance of Token', function() {
        // TODO: update the code to test Token
        expect(instance).to.be.a(BookBlogApi.Token);
      });

      it('should have the property token (base name: "Token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

    });
  });

}));
