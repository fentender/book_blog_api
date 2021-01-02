/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 0.0.8
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
    define(['ApiClient', 'model/Review'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Review'));
  } else {
    // Browser globals (root is window)
    if (!root.BookBlogApi) {
      root.BookBlogApi = {};
    }
    root.BookBlogApi.Reviews = factory(root.BookBlogApi.ApiClient, root.BookBlogApi.Review);
  }
}(this, function(ApiClient, Review) {
  'use strict';

  /**
   * The Reviews model module.
   * @module model/Reviews
   * @version 0.0.8
   */

  /**
   * Constructs a new <code>Reviews</code>.
   * @alias module:model/Reviews
   * @class
   * @param num {Number} 
   * @param reviews {Array.<module:model/Review>} 
   */
  var exports = function(num, reviews) {
    this.num = num;
    this.reviews = reviews;
  };

  /**
   * Constructs a <code>Reviews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reviews} obj Optional instance to populate.
   * @return {module:model/Reviews} The populated <code>Reviews</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('num'))
        obj.num = ApiClient.convertToType(data['num'], 'Number');
      if (data.hasOwnProperty('reviews'))
        obj.reviews = ApiClient.convertToType(data['reviews'], [Review]);
    }
    return obj;
  }

  /**
   * @member {Number} num
   */
  exports.prototype.num = undefined;

  /**
   * @member {Array.<module:model/Review>} reviews
   */
  exports.prototype.reviews = undefined;


  return exports;

}));
