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

//console.log(data);
//area to grab relevent data on click
$("#search").on("click", function(event) {
	event.preventDefault();
    console.log("search")
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(data) {
		let newsCont = $("#newsContainer");
		newsCont.empty();
        console.log(data)
        for (let i = 0; i < data.articles.length; i++) {
			let url = data.articles[i].url;
			let aEl = $("<a>");
			let title = data.articles[i].title;
			aEl.attr("href", url);
			aEl.text(title);
			newsCont.append(aEl);
			console.log(newsCont);
			let stringfyArt = data.articles[i];
		}
	});
});
