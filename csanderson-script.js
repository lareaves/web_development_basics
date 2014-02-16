function change_text(id) {
    id.innerHTML="It's just a flesh wound!";
}

function validateForm(){
    var name=document.forms["cross_the_bridge"]["name"].value;
    var velocity=document.forms["cross_the_bridge"]["velocity"].value;
    var swallow=document.forms["cross_the_bridge"]["swallow"].value;

    if (name == null || name == "") {
	alert("I ask again! What is your name?!");
	return false;
    }

    if (!validateCheckBoxes(document.forms["cross_the_bridge"]["quest"])) {
	alert("I ask again! What is your quest?!");
	return false;
    }

    if (velocity == null || velocity == "") {
	alert("I ask again! What is the airspeed velocity of an unladen swallow?!");
	return false;
    } else if (isNaN(velocity)){
	alert("That is not a number!");
	return false;
    } else if (velocity <= 0){
	alert("This is not physics! The velocity must be positive!");
	return false;
    }

    if (swallow == "undecided") {
	alert("You must choose!");
	return false;
    }

    return true;
}

function validateCheckBoxes(checkBoxes){
    for(i=0; i < checkBoxes.length; ++i){
	if (checkBoxes[i].checked) return true;
    }
    return false;
}