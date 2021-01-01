/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 0.0.7
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
    describe('BookshelfBookshelf', function() {
      beforeEach(function() {
        instance = new BookBlogApi.BookshelfBookshelf();
      });

      it('should create an instance of BookshelfBookshelf', function() {
        // TODO: update the code to test BookshelfBookshelf
        expect(instance).to.be.a(BookBlogApi.BookshelfBookshelf);
      });

      it('should have the property bookName (base name: "bookName")', function() {
        // TODO: update the code to test the property bookName
        expect(instance).to.have.property('bookName');
        // expect(instance.bookName).to.be(expectedValueLiteral);
      });

      it('should have the property bookId (base name: "bookId")', function() {
        // TODO: update the code to test the property bookId
        expect(instance).to.have.property('bookId');
        // expect(instance.bookId).to.be(expectedValueLiteral);
      });

    });
  });

}));
