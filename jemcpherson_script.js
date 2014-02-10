function validate() {
	var valid = true;
	var num = $('form input#number').val();
	if (num < 1 || num > 10) 
	{
		alert('You must supply a number between 1 and 10');
		valid = false;
	}
	var text = $('form input#text').val();
	if (text === '') {
		alert('You must supply some text.');
		valid = false;
	}
	var email = $('form input#email').val();
	if (email === '') {
		alert('You must supply an email.');
		valid = false;
	}
	return valid;
}
