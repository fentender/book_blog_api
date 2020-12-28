/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 0.0.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    describe('Reviews', function() {
      beforeEach(function() {
        instance = new BookBlogApi.Reviews();
      });

      it('should create an instance of Reviews', function() {
        // TODO: update the code to test Reviews
        expect(instance).to.be.a(BookBlogApi.Reviews);
      });

      it('should have the property num (base name: "num")', function() {
        // TODO: update the code to test the property num
        expect(instance).to.have.property('num');
        // expect(instance.num).to.be(expectedValueLiteral);
      });

      it('should have the property reviews (base name: "reviews")', function() {
        // TODO: update the code to test the property reviews
        expect(instance).to.have.property('reviews');
        // expect(instance.reviews).to.be(expectedValueLiteral);
      });

    });
  });

}));
