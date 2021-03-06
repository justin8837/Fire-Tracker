$("#search").on("click", function(event) {
	let dataInput = $("#input")
		.val()
		.trim();
	let queryURL =
		"https://api.opencagedata.com/geocode/v1/json?q=" +
		dataInput +
		"&key=f0850a731b144cb69211841cba0efbb2";
	let APIkey = "f0850a731b144cb69211841cba0efbb2";
	console.log(queryURL);

	$("#map").empty();

	//ajax call to convert text to lon,lat
	$.ajax({
		url: queryURL,
		method: "get"
	}).then(function(response) {
		console.log(response);
		//put the response into the maps
		//get lng and lat
		console.log(response.results[0].geometry);
		let lngLocation = response.results[0].geometry.lng;
		let latLocation = response.results[0].geometry.lat;
		console.log(lngLocation);
		console.log(latLocation);
		//find out how open layers grab lon lat data
		//see if it focuses on the search
		var map = new ol.Map({
			target: "map",
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
				})
			],

			view: new ol.View({
				center: ol.proj.fromLonLat([lngLocation, latLocation]),
				zoom: 13
			})
		});
	});
});
// <!-- Brainstorm for how we can move a parameter from object to object
// if parameter = city name
// objects will be the search bar, the map, and the news page
// the parameter has to jump from object to object first, search bar then, map finally news
// -->
