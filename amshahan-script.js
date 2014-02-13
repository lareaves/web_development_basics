function Validate() {
	var errorString = "";

	var firstName = $("#First").val();
	
	if (firstName.trim() == "" || firstName == null) {
		errorString += "Empty First Name<br />";
		$("#First").css("background-color","#BB0000");
		$("#First").css("color","#FFFFFF");
	}
	else {
		$("#First").css("background-color","#FFFFFF");
		$("#First").css("color","#000000");
	}
	
	var lastName = $("#Last").val();
	
	if (lastName.trim() == "" || lastName == null) {
		errorString += "Empty Last Name<br />";
		$("#Last").css("background-color","#BB0000");
		$("#Last").css("color","#FFFFFF");
	}
	else {
		$("#Last").css("background-color","#FFFFFF");
		$("#Last").css("color","#000000");
	}
	
	var option = $("#Gender").val();
	
	if (option == "None") {
		errorString += "Gender Is Unselected<br />";
		$("#Gender").css("background-color","#BB0000");
		$("#Gender").css("color","#FFFFFF");
	}
	else {
		$("#Gender").css("background-color","#FFFFFF");
		$("#Gender").css("color","#000000");
	}
	
	var email = $("#Email").val();
	
	if (email.trim() == "" || email == null || email.indexOf("@") < 1) {
		errorString += "Invalid Email Address<br />";
		$("#Email").css("background-color","#BB0000");
		$("#Email").css("color","#FFFFFF");
	}
	else {
		$("#Email").css("background-color","#FFFFFF");
		$("#Email").css("color","#000000");
	}
	
	var password = $("#Password").val();
	var repassword = $("#RePassword").val();
	
	if (password.trim() == "" || password == null) {
		errorString += "Empty Password Field<br />";
		$("#Password").css("background-color","#BB0000");
		$("#Password").css("color","#FFFFFF");
		$("#RePassword").css("background-color","#BB0000");
		$("#RePassword").css("color","#FFFFFF");
	}
	else {
		$("#Password").css("background-color","#FFFFFF");
		$("#Password").css("color","#000000");
		$("#RePassword").css("background-color","#FFFFFF");
		$("#RePassword").css("color","#000000");
	}
	
	if ((password.trim() != "" || password != null) && repassword != password) {
		errorString += "Passwords Do Not Match<br />";
		$("#RePassword").css("background-color","#BB0000");
		$("#RePassword").css("color","#FFFFFF");
	}
	else if(!(password.trim() == "" || password == null)) {
		$("#RePassword").css("background-color","#FFFFFF");
		$("#RePassword").css("color","#000000");
	}
	
	if (errorString != "" && errorString != null) {
		errorString = "Errors:<br />" + errorString;
		DisplayErrors(errorString);
		return false;
	}
	
}

function DisplayErrors(errorString) {
	$("#ErrorContent").html(errorString);
}