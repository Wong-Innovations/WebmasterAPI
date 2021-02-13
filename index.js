/**
 * WebmasterAPI
 * https://github.com/Wong-Innovations/WebmasterAPI
 *
 * Copyright (c) 2021 Dylan Wong
 * Licensed under the MIT license.
 */

import request from 'request';
let API_KEY = "";

exports.init = function(key) { API_KEY = key }

/**
 * @description Wrapper for IWebmasterApi.GetKeyword(...args)
 * @param {String} query.q Search query string.
 * @param {String} query.country Filter impressions by country.
 * @param {String} query.language Filter impressions by language.
 * @param {String} query.startDate Beginning datetime range in ISO format. Example: "2019-07-01T04:00:00.000Z"
 * @param {String} query.endDate Ending datetime range in ISO format. Example: "2020-07-01T04:00:00.000Z"
 * @return {Object} JSON keywords object. https://docs.microsoft.com/en-us/dotnet/api/microsoft.bing.webmaster.api.interfaces.keyword?view=bing-webmaster-dotnet
 */

exports.getKeyword = function(query) {
	if (API_KEY === "") throw new Error('No API_KEY configured. First use WebmasterAPI.init("your API key") or visit the documentation for help.');
	if (!query.q) return;
	if (!query.country) country = "";
	if (!query.language) language = "";
	if (query.startDate === "") throw new Error('Function: GetKeyword did not recieve startDate. Please insure a non-null yyyy-MM-dd\'T\'HH:mm:ss.SSSXXX format.');
	if (query.endDate === "") throw new Error('Function: GetKeyword did not recieve endDate. Please insure a non-null yyyy-MM-dd\'T\'HH:mm:ss.SSSXXX format.');

	request(`https://bing.com/webmaster/api.svc/json/GetKeyword?apikey=${API_KEY}&q=${query.q}&country=${query.country}&language=${query.language}&startDate=${query.startDate}&endDate=${query.endDate}`,
		function (error, response, body) {
			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			return body.d;
		}
	);
}