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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BookshelfsInner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BookshelfsInner'));
  } else {
    // Browser globals (root is window)
    if (!root.BookBlogApi) {
      root.BookBlogApi = {};
    }
    root.BookBlogApi.Bookshelfs = factory(root.BookBlogApi.ApiClient, root.BookBlogApi.BookshelfsInner);
  }
}(this, function(ApiClient, BookshelfsInner) {
  'use strict';

  /**
   * The Bookshelfs model module.
   * @module model/Bookshelfs
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Bookshelfs</code>.
   * @alias module:model/Bookshelfs
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Bookshelfs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bookshelfs} obj Optional instance to populate.
   * @return {module:model/Bookshelfs} The populated <code>Bookshelfs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'BookshelfsInner');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());
  return exports;

}));
