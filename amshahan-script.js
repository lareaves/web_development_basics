function Validate() {
	var firstName = $("#First").val();
	
	if (firstName.trim() == "" || firstName == null) {
		alert("Empty First Name");
		return false;
	}
	
	var lastName = $("#Last").val();
	
	if (lastName.trim() == "" || lastName == null) {
		alert("Empty Last Name");
		return false;
	}
	
	var option = $("#Gender").val();
	
	if (option == "None") {
		alert("Select a Gender");
		return false;
	}
	
	var email = $("#Email").val();
	
	if (email.trim() == "" || email == null || email.indexOf("@") < 1) {
		alert("Enter a valid email address");
		return false;
	}
	
	var password = $("#Password").val();
	var repassword = $("#RePassword").val();
	
	if (password.trim() == "" || password == null) {
		alert("Fill Out Password")
		return false;
	}
	
	if (repassword != password) {
		alert ("Passwords Do Not Match");
		return false;
	}
	
	alert("First : " + firstName + "\nLast : " + lastName + "\nOption : " + option + 
	"\nEmail : " + email + "\nPassword : " + password + "\nRePassword : " + repassword);
}