# BookBlogApi.UserBookshelfApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBookInBookshelf**](UserBookshelfApi.md#addBookInBookshelf) | **POST** /users/{username}/bookshelfs/{bookshelfName}/{bookId} | Add a book to bookshelf.
[**createBookshelf**](UserBookshelfApi.md#createBookshelf) | **POST** /users/{username}/bookshelfs | Create a bookshelf
[**deleteBookInBookshelf**](UserBookshelfApi.md#deleteBookInBookshelf) | **DELETE** /users/{username}/bookshelfs/{bookshelfName}/{bookId} | delete a book to bookshelf.
[**deleteBookshelf**](UserBookshelfApi.md#deleteBookshelf) | **DELETE** /users/{username}/bookshelfs/{bookshelfName} | Delete a bookshelf
[**getBookshelf**](UserBookshelfApi.md#getBookshelf) | **GET** /users/{username}/bookshelfs/{bookshelfName} | Get a bookshelf of user
[**getBookshelfs**](UserBookshelfApi.md#getBookshelfs) | **GET** /users/{username}/bookshelfs | Get all bookshelfs


<a name="addBookInBookshelf"></a>
# **addBookInBookshelf**
> addBookInBookshelf(username, bookshelfName, bookId)

Add a book to bookshelf.

Add a 'book' object to book shelf.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserBookshelfApi();

var username = "username_example"; // String | User's ID

var bookshelfName = "bookshelfName_example"; // String | Bookshelf's name

var bookId = 56; // Number | Book's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addBookInBookshelf(username, bookshelfName, bookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 
 **bookshelfName** | **String**| Bookshelf's name | 
 **bookId** | **Number**| Book's ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createBookshelf"></a>
# **createBookshelf**
> createBookshelf(username, bookshelf)

Create a bookshelf

Create a 'bookshelf' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserBookshelfApi();

var username = "username_example"; // String | User's ID

var bookshelf = new BookBlogApi.Bookshelf(); // Bookshelf | Info of bookshelf


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createBookshelf(username, bookshelf, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 
 **bookshelf** | [**Bookshelf**](Bookshelf.md)| Info of bookshelf | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteBookInBookshelf"></a>
# **deleteBookInBookshelf**
> deleteBookInBookshelf(username, bookshelfName, bookId)

delete a book to bookshelf.

delete a 'book' object to book shelf.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserBookshelfApi();

var username = "username_example"; // String | User's ID

var bookshelfName = "bookshelfName_example"; // String | Bookshelf's name

var bookId = 56; // Number | Book's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBookInBookshelf(username, bookshelfName, bookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 
 **bookshelfName** | **String**| Bookshelf's name | 
 **bookId** | **Number**| Book's ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteBookshelf"></a>
# **deleteBookshelf**
> deleteBookshelf(username, bookshelfName, )

Delete a bookshelf

Delete a 'bookshelf' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserBookshelfApi();

var username = "username_example"; // String | User's ID

var bookshelfName = "bookshelfName_example"; // String | Bookshelf's name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteBookshelf(username, bookshelfName, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 
 **bookshelfName** | **String**| Bookshelf's name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBookshelf"></a>
# **getBookshelf**
> Bookshelf getBookshelf(username, bookshelfName, , opts)

Get a bookshelf of user

Get a 'bookshelf' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserBookshelfApi();

var username = "username_example"; // String | User's ID

var bookshelfName = "bookshelfName_example"; // String | Bookshelf's name

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
apiInstance.getBookshelf(username, bookshelfName, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 
 **bookshelfName** | **String**| Bookshelf's name | 
 **pageNumber** | **Number**| Page number | [optional] 

### Return type

[**Bookshelf**](Bookshelf.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBookshelfs"></a>
# **getBookshelfs**
> Bookshelfs getBookshelfs(username, , opts)

Get all bookshelfs

Returns a list containing all bookshelfs. The list supports paging.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserBookshelfApi();

var username = "username_example"; // String | User's ID

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
apiInstance.getBookshelfs(username, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 
 **pageNumber** | **Number**| Page number | [optional] 

### Return type

[**Bookshelfs**](Bookshelfs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

