var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


function fillDiv(array1, array2) {
	var hohohoElement = document.getElementById("reindeer");
	var content = "";
	if (array1.length < array2.length) {
		for (var i = 0; i < array1.length; i++) {
			content += "<p>" + array1[i] + " " + array2[i] + "</p>";
			hohohoElement.innerHTML = content;
		}
	} else {
		for (var i = 0; i < array2.length; i++) {
			content += "<p>" + array1[i] + " " + array2[i] + "</p>";
			hohohoElement.innerHTML = content;
		}
	}
}

/* How would I get this function to accept Id input? I tried and ran out of time... */

fillDiv(colors, reindeer);
