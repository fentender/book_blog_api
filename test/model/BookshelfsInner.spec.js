/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 1.0.1
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
    describe('BookshelfsInner', function() {
      beforeEach(function() {
        instance = new BookBlogApi.BookshelfsInner();
      });

      it('should create an instance of BookshelfsInner', function() {
        // TODO: update the code to test BookshelfsInner
        expect(instance).to.be.a(BookBlogApi.BookshelfsInner);
      });

      it('should have the property bookshelfName (base name: "bookshelfName")', function() {
        // TODO: update the code to test the property bookshelfName
        expect(instance).to.have.property('bookshelfName');
        // expect(instance.bookshelfName).to.be(expectedValueLiteral);
      });

    });
  });

}));