function validateForm(){
	var x = document.forms["junk"]["name"].value;
	var y = document.forms["junk"]["age"].value;
	if (x == null || x == ""){
		alert("No name entered");
		return false;
	}
	
	if (y == null || y == ""){
		alert("No age entered");
		return false;
	}
	if (isNaN(y)){
		alert("Age must be an integer");
		return false;
	}
	if (validateRadioButtons(document.forms["junk"]["os"])){
		return true;
	}
	else{
		alert("Must choose an OS")
		return false;
	}
}

function validateRadioButtons(radioButtons){
	for(i=0; i< radioButtons.length; ++i){
		if (radioButtons[i].checked) return true;
	}
	return false;
}
