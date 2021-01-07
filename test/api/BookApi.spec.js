/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 1.0.0
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

  beforeEach(function() {
    instance = new BookBlogApi.BookApi();
  });

  describe('(package)', function() {
    describe('BookApi', function() {
      describe('getBook', function() {
        it('should call getBook successfully', function(done) {
          // TODO: uncomment, update parameter values for getBook call and complete the assertions
          /*
          var bookId = 56;

          instance.getBook(bookId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BookBlogApi.Book);
            expect(data.bookId).to.be.a('number');
            expect(data.bookId).to.be(0);
            expect(data.bookName).to.be.a('string');
            expect(data.bookName).to.be("");
            expect(data.autor).to.be.a('string');
            expect(data.autor).to.be("");
            expect(data.info).to.be.a('string');
            expect(data.info).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBooks', function() {
        it('should call getBooks successfully', function(done) {
          // TODO: uncomment, update parameter values for getBooks call and complete the assertions
          /*
          var opts = {};
          opts.pageNumber = 56;

          instance.getBooks(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BookBlogApi.Books);
            expect(data.num).to.be.a('number');
            expect(data.num).to.be(0);
            {
              let dataCtr = data.books;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BookBlogApi.Book);
                expect(data.bookId).to.be.a('number');
                expect(data.bookId).to.be(0);
                expect(data.bookName).to.be.a('string');
                expect(data.bookName).to.be("");
                expect(data.autor).to.be.a('string');
                expect(data.autor).to.be("");
                expect(data.info).to.be.a('string');
                expect(data.info).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
