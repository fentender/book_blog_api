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

  beforeEach(function() {
    instance = new BookBlogApi.ReviewApi();
  });

  describe('(package)', function() {
    describe('ReviewApi', function() {
      describe('createReview', function() {
        it('should call createReview successfully', function(done) {
          // TODO: uncomment, update parameter values for createReview call
          /*
          var bookId = 56;
          var review = new BookBlogApi.Review();
          review.ID = 0;
          review.content = "";
          review.autor = "";

          instance.createReview(bookId, review, function(error, data, response) {
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
      describe('deleteReview', function() {
        it('should call deleteReview successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteReview call
          /*
          var bookId = 56;
          var reviewId = 56;

          instance.deleteReview(bookId, reviewId, function(error, data, response) {
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
      describe('getReview', function() {
        it('should call getReview successfully', function(done) {
          // TODO: uncomment, update parameter values for getReview call and complete the assertions
          /*
          var bookId = 56;
          var reviewId = 56;

          instance.getReview(bookId, reviewId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BookBlogApi.Review);
            expect(data.ID).to.be.a('number');
            expect(data.ID).to.be(0);
            expect(data.content).to.be.a('string');
            expect(data.content).to.be("");
            expect(data.autor).to.be.a('string');
            expect(data.autor).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getReviews', function() {
        it('should call getReviews successfully', function(done) {
          // TODO: uncomment, update parameter values for getReviews call and complete the assertions
          /*
          var bookId = 56;
          var opts = {};
          opts.pageNumber = 56;

          instance.getReviews(bookId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BookBlogApi.Reviews);
            expect(data.num).to.be.a('number');
            expect(data.num).to.be(0);
            {
              let dataCtr = data.reviews;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BookBlogApi.Review);
                expect(data.ID).to.be.a('number');
                expect(data.ID).to.be(0);
                expect(data.content).to.be.a('string');
                expect(data.content).to.be("");
                expect(data.autor).to.be.a('string');
                expect(data.autor).to.be("");

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
