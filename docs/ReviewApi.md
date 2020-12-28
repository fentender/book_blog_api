# BookBlogApi.ReviewApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReview**](ReviewApi.md#createReview) | **POST** /reviews/{bookId} | Create a review
[**deleteReview**](ReviewApi.md#deleteReview) | **DELETE** /reviews/{bookId}/{reviewId} | Delete a review
[**getReview**](ReviewApi.md#getReview) | **GET** /reviews/{bookId}/{reviewId} | Get a review information
[**getReviews**](ReviewApi.md#getReviews) | **GET** /reviews/{bookId} | Get all reviews


<a name="createReview"></a>
# **createReview**
> createReview(bookIdreview)

Create a review

Create a 'review' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.ReviewApi();

var bookId = 56; // Number | Book's ID

var review = new BookBlogApi.Review(); // Review | Info of review


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createReview(bookIdreview, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book's ID | 
 **review** | [**Review**](Review.md)| Info of review | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteReview"></a>
# **deleteReview**
> deleteReview(bookIdreviewId)

Delete a review

Delete a 'review' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.ReviewApi();

var bookId = 56; // Number | Book's ID

var reviewId = 56; // Number | Review's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReview(bookIdreviewId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book's ID | 
 **reviewId** | **Number**| Review's ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getReview"></a>
# **getReview**
> Review getReview(bookIdreviewId)

Get a review information

Gets `review` objects.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.ReviewApi();

var bookId = 56; // Number | Book's ID

var reviewId = 56; // Number | Review's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReview(bookIdreviewId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book's ID | 
 **reviewId** | **Number**| Review's ID | 

### Return type

[**Review**](Review.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getReviews"></a>
# **getReviews**
> Reviews getReviews(bookId, opts)

Get all reviews

Returns a list containing all reviews. The list supports paging.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.ReviewApi();

var bookId = 56; // Number | Book's ID

var opts = { 
  'pageNumber': 56 // Number | Page number
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReviews(bookId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book's ID | 
 **pageNumber** | **Number**| Page number | [optional] 

### Return type

[**Reviews**](Reviews.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

