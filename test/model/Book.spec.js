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
    describe('Book', function() {
      beforeEach(function() {
        instance = new BookBlogApi.Book();
      });

      it('should create an instance of Book', function() {
        // TODO: update the code to test Book
        expect(instance).to.be.a(BookBlogApi.Book);
      });

      it('should have the property bookId (base name: "bookId")', function() {
        // TODO: update the code to test the property bookId
        expect(instance).to.have.property('bookId');
        // expect(instance.bookId).to.be(expectedValueLiteral);
      });

      it('should have the property bookName (base name: "bookName")', function() {
        // TODO: update the code to test the property bookName
        expect(instance).to.have.property('bookName');
        // expect(instance.bookName).to.be(expectedValueLiteral);
      });

      it('should have the property autor (base name: "autor")', function() {
        // TODO: update the code to test the property autor
        expect(instance).to.have.property('autor');
        // expect(instance.autor).to.be(expectedValueLiteral);
      });

      it('should have the property info (base name: "info")', function() {
        // TODO: update the code to test the property info
        expect(instance).to.have.property('info');
        // expect(instance.info).to.be(expectedValueLiteral);
      });

    });
  });

}));
