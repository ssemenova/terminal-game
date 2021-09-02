let textbox = document.getElementById("input");

textbox.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
	print("submitted");
	parseInput(textbox.value);
    }
});
