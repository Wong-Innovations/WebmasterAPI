# WebmasterAPI

This is a Node.js wrapper for the [Bing Webmaster API](https://docs.microsoft.com/en-us/dotnet/api/webapi/?view=bing-webmaster-dotnet).

## Installation

```console
foo@bar:~$ npm install WebmasterAPI --save
```

## Usage

```JavaScript
var WebmasterAPI = require('WebmasterAPI');

WebmasterAPI.init("your API key");

var yesterday = new Date(Date.now() - 86400 * 1000).toISOString();
var today = Date.now().toISOString();

console.log(WebmasterAPI.getKeyword({q: "peanuts", startDate: yesterday, endDate: today}));
// This should log an object containing keyword impression stats.
```

## Release History

* 0.1.0 Initial release