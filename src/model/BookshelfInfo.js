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
    root.BookBlogApi.BookshelfInfo = factory(root.BookBlogApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BookshelfInfo model module.
   * @module model/BookshelfInfo
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>BookshelfInfo</code>.
   * @alias module:model/BookshelfInfo
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    this.name = name;
  };

  /**
   * Constructs a <code>BookshelfInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BookshelfInfo} obj Optional instance to populate.
   * @return {module:model/BookshelfInfo} The populated <code>BookshelfInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));