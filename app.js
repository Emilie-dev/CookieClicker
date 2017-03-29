var count = 0;
var array = [
	"Bravo!",
	"Continu!",
	"Encore!",
	"Super!",
];

$("#cookie").click(function() {
	count += 1;
	$("#message").html(count);
	console.log(count);
	
// I can see the number of time I click on the photo in my html page.

	for (var i = 3; i <= array.length; i++) {
		var random = Math.floor(Math.random() * 3);
		console.log(array);
	}
});
