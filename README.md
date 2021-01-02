# book_blog_api

BookBlogApi - JavaScript client for book_blog_api
This is a blog about books.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.8
- Package version: 0.0.8
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install book_blog_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your book_blog_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('book_blog_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/book_blog_api
then install it via:

```shell
    npm install YOUR_USERNAME/book_blog_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BookBlogApi = require('book_blog_api');

var api = new BookBlogApi.BookApi()

var bookId = 56; // {Number} Book's ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getBook(bookId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BookBlogApi.BookApi* | [**getBook**](docs/BookApi.md#getBook) | **GET** /books/{bookId} | Get a book information
*BookBlogApi.BookApi* | [**getBooks**](docs/BookApi.md#getBooks) | **GET** /books | Get all book
*BookBlogApi.ReviewApi* | [**getReview**](docs/ReviewApi.md#getReview) | **GET** /reviews/{bookId}/{reviewId} | Get a review information
*BookBlogApi.ReviewApi* | [**getReviews**](docs/ReviewApi.md#getReviews) | **GET** /reviews/{bookId} | Get all reviews
*BookBlogApi.TokenApi* | [**signIn**](docs/TokenApi.md#signIn) | **GET** /token | Sign in account
*BookBlogApi.TokenApi* | [**signOut**](docs/TokenApi.md#signOut) | **DELETE** /token | Sign out
*BookBlogApi.TokenApi* | [**signUp**](docs/TokenApi.md#signUp) | **POST** /token | Create a account
*BookBlogApi.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /users/{username} | Get a user
*BookBlogApi.UserBookshelfApi* | [**addBookInBookshelf**](docs/UserBookshelfApi.md#addBookInBookshelf) | **POST** /users/{username}/bookshelfs/{bookshelfName}/{bookId} | Add a book to bookshelf.
*BookBlogApi.UserBookshelfApi* | [**createBookshelf**](docs/UserBookshelfApi.md#createBookshelf) | **POST** /users/{username}/bookshelfs | Create a bookshelf
*BookBlogApi.UserBookshelfApi* | [**deleteBookInBookshelf**](docs/UserBookshelfApi.md#deleteBookInBookshelf) | **DELETE** /users/{username}/bookshelfs/{bookshelfName}/{bookId} | delete a book to bookshelf.
*BookBlogApi.UserBookshelfApi* | [**deleteBookshelf**](docs/UserBookshelfApi.md#deleteBookshelf) | **DELETE** /users/{username}/bookshelfs/{bookshelfName} | Delete a bookshelf
*BookBlogApi.UserBookshelfApi* | [**getBookshelf**](docs/UserBookshelfApi.md#getBookshelf) | **GET** /users/{username}/bookshelfs/{bookshelfName} | Get a bookshelf of user
*BookBlogApi.UserBookshelfApi* | [**getBookshelfs**](docs/UserBookshelfApi.md#getBookshelfs) | **GET** /users/{username}/bookshelfs | Get all bookshelfs


## Documentation for Models

 - [BookBlogApi.Book](docs/Book.md)
 - [BookBlogApi.Books](docs/Books.md)
 - [BookBlogApi.Bookshelf](docs/Bookshelf.md)
 - [BookBlogApi.BookshelfBookshelf](docs/BookshelfBookshelf.md)
 - [BookBlogApi.BookshelfInfo](docs/BookshelfInfo.md)
 - [BookBlogApi.Bookshelfs](docs/Bookshelfs.md)
 - [BookBlogApi.BookshelfsBookshelfs](docs/BookshelfsBookshelfs.md)
 - [BookBlogApi.Review](docs/Review.md)
 - [BookBlogApi.Reviews](docs/Reviews.md)
 - [BookBlogApi.Token](docs/Token.md)
 - [BookBlogApi.User](docs/User.md)


## Documentation for Authorization

 All endpoints do not require authorization.

