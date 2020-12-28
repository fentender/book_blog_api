/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 0.0.3
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

  beforeEach(function() {
    instance = new BookBlogApi.UserBookshelfApi();
  });

  describe('(package)', function() {
    describe('UserBookshelfApi', function() {
      describe('addBookInBookshelf', function() {
        it('should call addBookInBookshelf successfully', function(done) {
          // TODO: uncomment, update parameter values for addBookInBookshelf call
          /*
          var username = "username_example";
          var bookshelfName = "bookshelfName_example";
          var bookId = 56;

          instance.addBookInBookshelf(username, bookshelfName, bookId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createBookshelf', function() {
        it('should call createBookshelf successfully', function(done) {
          // TODO: uncomment, update parameter values for createBookshelf call
          /*
          var username = "username_example";
          var bookshelf = new BookBlogApi.Bookshelf();

          instance.createBookshelf(username, bookshelf, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteBookInBookshelf', function() {
        it('should call deleteBookInBookshelf successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteBookInBookshelf call
          /*
          var username = "username_example";
          var bookshelfName = "bookshelfName_example";
          var bookId = 56;

          instance.deleteBookInBookshelf(username, bookshelfName, bookId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteBookshelf', function() {
        it('should call deleteBookshelf successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteBookshelf call
          /*
          var username = "username_example";
          var bookshelfName = "bookshelfName_example";

          instance.deleteBookshelf(username, bookshelfName, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBookshelf', function() {
        it('should call getBookshelf successfully', function(done) {
          // TODO: uncomment, update parameter values for getBookshelf call and complete the assertions
          /*
          var username = "username_example";
          var bookshelfName = "bookshelfName_example";
          var opts = {};
          opts.pageNumber = 56;

          instance.getBookshelf(username, bookshelfName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BookBlogApi.Bookshelf);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBookshelfs', function() {
        it('should call getBookshelfs successfully', function(done) {
          // TODO: uncomment, update parameter values for getBookshelfs call and complete the assertions
          /*
          var username = "username_example";
          var opts = {};
          opts.pageNumber = 56;

          instance.getBookshelfs(username, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BookBlogApi.Bookshelfs);

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
