function validateForm() {
	var text = document.forms["myForm"]["text"].value;
	var select = document.forms["myForm"]["select"].value;
	var radios = document.forms["myForm"]["radio"];
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			var radio = radios[i].value;
			break;
		}
	}

	if (text == null || text.length < 3) {
		alert('Text must be at least three characters.');
		return false;
	}

	if (radio == null || radio == '') {
		alert('You must select a radio button.');
		return false;
	}

	if (select == null || select == '') {
		alert('You must select a drop down option.');
		return false;
	}
}
