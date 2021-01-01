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
    root.BookBlogApi.Review = factory(root.BookBlogApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Review model module.
   * @module model/Review
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>Review</code>.
   * @alias module:model/Review
   * @class
   * @param ID {Number} 
   */
  var exports = function(ID) {
    this.ID = ID;
  };

  /**
   * Constructs a <code>Review</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Review} obj Optional instance to populate.
   * @return {module:model/Review} The populated <code>Review</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'Number');
      if (data.hasOwnProperty('Content'))
        obj.content = ApiClient.convertToType(data['Content'], 'String');
      if (data.hasOwnProperty('autor'))
        obj.autor = ApiClient.convertToType(data['autor'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} ID
   */
  exports.prototype.ID = undefined;

  /**
   * @member {String} content
   */
  exports.prototype.content = undefined;

  /**
   * @member {String} autor
   */
  exports.prototype.autor = undefined;


  return exports;

}));
