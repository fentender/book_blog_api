/*
 * Book Blog API
 * This is a blog about books.
 *
 * OpenAPI spec version: 0.0.5
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
    root.BookBlogApi.Token = factory(root.BookBlogApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Token model module.
   * @module model/Token
   * @version 0.0.5
   */

  /**
   * Constructs a new <code>Token</code>.
   * @alias module:model/Token
   * @class
   * @param token {String} 
   */
  var exports = function(token) {
    this.token = token;
  };

  /**
   * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Token} obj Optional instance to populate.
   * @return {module:model/Token} The populated <code>Token</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Token'))
        obj.token = ApiClient.convertToType(data['Token'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} token
   */
  exports.prototype.token = undefined;


  return exports;

}));
