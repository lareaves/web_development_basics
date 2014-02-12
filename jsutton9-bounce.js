var box = null;
var speed = null;

function doMove(speed) {
	box.style.top = parseInt(box.style.top)+speed+'px';
	box.style.left = parseInt(box.style.left)+2+'px';

	if (parseInt(box.style.top) <= 10) {
		speed = -speed*.9;
	}

	if (parseInt(box.style.left) >= 500) {
		box.style.top = '27em';
		box.style.left = '20em';
		return;
	}

	setTimeout(function() {doMove(speed-1)}, 20);
}

function animate() {
	box = document.getElementById('myBox');
	box.style.top = '10px';
	box.style.left = '0px';
	doMove(30);
}
