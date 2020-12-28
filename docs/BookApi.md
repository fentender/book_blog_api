# BookBlogApi.BookApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBook**](BookApi.md#createBook) | **POST** /books | Create a book
[**deleteBook**](BookApi.md#deleteBook) | **DELETE** /books/{bookId} | Delete a book
[**getBook**](BookApi.md#getBook) | **GET** /books/{bookId} | Get a book information
[**getBooks**](BookApi.md#getBooks) | **GET** /books | Get all book
[**updateBook**](BookApi.md#updateBook) | **PUT** /books/{bookId} | Update a book info.


<a name="createBook"></a>
# **createBook**
> createBook(book)

Create a book

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.BookApi();

var book = new BookBlogApi.Book(); // Book | Info of book.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createBook(book, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **book** | [**Book**](Book.md)| Info of book. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteBook"></a>
# **deleteBook**
> deleteBook(bookId)

Delete a book

Delete a 'book' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.BookApi();

var bookId = 56; // Number | Book's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBook(bookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book's ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBook"></a>
# **getBook**
> Book getBook(bookId)

Get a book information

Gets `book` objects.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.BookApi();

var bookId = 56; // Number | Book's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBook(bookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book's ID | 

### Return type

[**Book**](Book.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBooks"></a>
# **getBooks**
> Books getBooks(opts)

Get all book

Returns a list containing all books. The list supports paging.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.BookApi();

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
apiInstance.getBooks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | **Number**| Page number | [optional] 

### Return type

[**Books**](Books.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateBook"></a>
# **updateBook**
> updateBook(bookIdbook)

Update a book info.

Update a 'book' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.BookApi();

var bookId = 56; // Number | Book's ID

var book = new BookBlogApi.Book(); // Book | Info of book.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateBook(bookIdbook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book's ID | 
 **book** | [**Book**](Book.md)| Info of book. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

