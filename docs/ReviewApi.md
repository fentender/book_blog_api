# BookBlogApi.ReviewApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReview**](ReviewApi.md#getReview) | **GET** /reviews/{bookId}/{reviewId} | Get a review information
[**getReviews**](ReviewApi.md#getReviews) | **GET** /reviews/{bookId} | Get all reviews


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

