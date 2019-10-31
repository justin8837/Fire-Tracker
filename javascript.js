//Need to make api key for la times
//do ajax call for la times
//add api key
//change search relevence to wild fires
//make sure to get input for the city location
//**make sure to check how many responses you can make */

//declare variables for the query and response
// let queryURL =
// 	"https://newsapi.org/v2/top-headlines?domains=latimes.comcountry=us&q=wildfires&from=2019-01-01&sortBy=popularity&int5&apiKey=88aee6a7ec7d47f4bfcafa15b86b0599";

// let req = new Request(queryURL);

// fetch(req).then(function(response) {
// 	console.log(response.json());
// });
var url =
	"https://newsapi.org/v2/everything?" +
	"pageSize10&" +
	"q=+Wildfires in Los Angeles County&" +
	"from=2019-10-01&" +
	"sortBy=popularity&" +
	"pageSize10&" +
	"apiKey=88aee6a7ec7d47f4bfcafa15b86b0599";

var req = new Request(url);

fetch(req).then(function(response) {
	$(".newsContainer").append(response);
	console.log(response.json());
});
