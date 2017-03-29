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


	for (var i = 3; i <= array.length; i++) {
		var random = Math.floor(Math.random() * 3);
		console.log(array);
	}
});
