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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Book'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Book'));
  } else {
    // Browser globals (root is window)
    if (!root.BookBlogApi) {
      root.BookBlogApi = {};
    }
    root.BookBlogApi.Books = factory(root.BookBlogApi.ApiClient, root.BookBlogApi.Book);
  }
}(this, function(ApiClient, Book) {
  'use strict';

  /**
   * The Books model module.
   * @module model/Books
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Books</code>.
   * @alias module:model/Books
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Books</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Books} obj Optional instance to populate.
   * @return {module:model/Books} The populated <code>Books</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Book');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());
  return exports;

}));