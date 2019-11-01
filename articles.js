//**make sure to check how many responses you can make */
//declare variables for the query and response
//need to make the articles append to the page
//link should be included?
//need to make it interact with the search bar

//no need to touch URL atm
let data = $("#input").val();

var queryURL =
	"https://newsapi.org/v2/everything?" +
	"q=+Wildfires in Los Angeles County" +
	data +
	"&from=2019-10-01&" +
	"sortBy=popularity&" +
	"pageSize=5&" +
	"apiKey=88aee6a7ec7d47f4bfcafa15b86b0599";

var req = new Request(queryURL);
let url = [];
//function to clear the article area
function clear() {
	$(".newsContainer").empty();
}

console.log(data);
//area to grab relevent data on click
$("#search ").on("click", function(event) {
	event.preventDefault();

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(event) {
		let newsCont = $("#newsContainer");
		newsCont.empty();

		for (let i = 0; i < event.articles.length; i++) {
			let url = event.articles[i].url;
			let aEl = $("<a>");
			let title = event.articles[i].title;
			aEl.attr("href", url);
			aEl.text(title);
			newsCont.append(aEl);
			newsCont.append("<li>");
			console.log(newsCont);
			let stringfyArt = event.articles[i];
		}
	});
});
