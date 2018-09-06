var colors = [];

var pickedColor;

var squares = document.querySelectorAll(".square");

var colorSelected = document.getElementById("colorDisply");

var messageDisply = document.querySelector("#message");

var h1 = document.querySelector("h1");

var numberScores = 6;

var resetButton = document.querySelector("#resetButton");

var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
	reset();

});


function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			this.classList.add("selected");
			this.textContent === "Easy" ? numberScores = 3 : numberScores = 6;
			
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				messageDisply.textContent = "correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisply.textContent = "try again";
			}

		});
	}
}




function reset() {
	colors = generateRamdomColor(numberScores);
	pickedColor = pickColor();
	colorSelected.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}

	}
	h1.style.backgroundColor = "steelblue";
	messageDisply.textContent = "";
	resetButton.textContent = "New Colors";
}






function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor((Math.random() * colors.length));

	return colors[random];
}

function generateRamdomColor(num) {
	
	var colors = [];
	for (var i = 0; i < num; i++) {
		colors.push(randomColor());

	}
	return colors;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";

}

