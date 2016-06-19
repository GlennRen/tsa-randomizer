function newArrow() {
	var randomNumber = Math.floor((Math.random() * 2));

	if (randomNumber) {
		document.getElementById("arrow").innerHTML = "&#11013;";
	} else {
		document.getElementById("arrow").innerHTML = "&#10145;";
	}
}

newArrow();
$(window).click(function(){
	newArrow();
});