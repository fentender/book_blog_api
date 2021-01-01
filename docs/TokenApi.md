# BookBlogApi.TokenApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signIn**](TokenApi.md#signIn) | **GET** /token | Sign in account
[**signOut**](TokenApi.md#signOut) | **DELETE** /token | Sign out
[**signUp**](TokenApi.md#signUp) | **POST** /token | Create a account


<a name="signIn"></a>
# **signIn**
> Token signIn(userInfo)

Sign in account

Sign in to your account, and get a token.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.TokenApi();

var userInfo = new BookBlogApi.User(); // User | User's info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signIn(userInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInfo** | [**User**](User.md)| User's info | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="signOut"></a>
# **signOut**
> signOut()

Sign out

Sign out account

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.TokenApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.signOut(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="signUp"></a>
# **signUp**
> Token signUp(userInfo)

Create a account

Create a 'user' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.TokenApi();

var userInfo = new BookBlogApi.User(); // User | User's info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signUp(userInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInfo** | [**User**](User.md)| User's info | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

