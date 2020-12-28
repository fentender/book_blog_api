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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BookBlogApi) {
      root.BookBlogApi = {};
    }
    root.BookBlogApi.Book = factory(root.BookBlogApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Book model module.
   * @module model/Book
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Book</code>.
   * @alias module:model/Book
   * @class
   * @param bookId {Number} 
   */
  var exports = function(bookId) {
    this.bookId = bookId;
  };

  /**
   * Constructs a <code>Book</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Book} obj Optional instance to populate.
   * @return {module:model/Book} The populated <code>Book</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bookId'))
        obj.bookId = ApiClient.convertToType(data['bookId'], 'Number');
      if (data.hasOwnProperty('bookName'))
        obj.bookName = ApiClient.convertToType(data['bookName'], 'String');
      if (data.hasOwnProperty('autor'))
        obj.autor = ApiClient.convertToType(data['autor'], 'String');
      if (data.hasOwnProperty('info'))
        obj.info = ApiClient.convertToType(data['info'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} bookId
   */
  exports.prototype.bookId = undefined;

  /**
   * @member {String} bookName
   */
  exports.prototype.bookName = undefined;

  /**
   * @member {String} autor
   */
  exports.prototype.autor = undefined;

  /**
   * @member {String} info
   */
  exports.prototype.info = undefined;

  return exports;

}));
