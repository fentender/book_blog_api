# BookBlogApi.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /users | Create a user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{username} | Delete a user
[**getUser**](UserApi.md#getUser) | **GET** /users/{username} | Get a user


<a name="createUser"></a>
# **createUser**
> createUser(userInfo)

Create a user

Create a 'user' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserApi();

var userInfo = new BookBlogApi.User(); // User | User's info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(userInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInfo** | [**User**](User.md)| User's info | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(username, )

Delete a user

Delete a 'user' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserApi();

var username = "username_example"; // String | User's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(username, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUser"></a>
# **getUser**
> User getUser(username, userInfo)

Get a user

Get a 'user' object.

### Example
```javascript
var BookBlogApi = require('book_blog_api');

var apiInstance = new BookBlogApi.UserApi();

var username = "username_example"; // String | User's ID

var userInfo = new BookBlogApi.User(); // User | User's info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(username, userInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| User's ID | 
 **userInfo** | [**User**](User.md)| User's info | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

