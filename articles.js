//**make sure to check how many responses you can make */
//declare variables for the query and response
//need to make the articles append to the page
//link should be included?
//need to make it interact with the search bar

//no need to touch URL atm
var queryURL =
	"https://newsapi.org/v2/everything?" +
	"pageSize10&" +
	"q=+Wildfires in Los Angeles County&" +
	"from=2019-10-01&" +
	"sortBy=popularity&" +
	"pageSize=5&" +
	"apiKey=88aee6a7ec7d47f4bfcafa15b86b0599";

var req = new Request(queryURL);
//function to clear the article area
function clear() {
	$(".newsContainer").empty();
}
//required code given by news api
fetch(req).then(function(response) {
	console.log(response.json());
});

//need to ask about how to grab article
// let numArticles = 5;
// for (i = 0; i < response.articles.length; i++) {
// 	let articles;

//area to grab relevent data on click
$("#search-btn").on("click", function(event) {
	event.preventDefault();
	console.log("#search-btn");
	clear();
	$.ajax({
		url: queryURL,
		method: "get"
	})
		.then //need to append);
		();
});
