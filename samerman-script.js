function greet() {
    var greeting = 'Hello, ' + $('#name').val() + '!';
    alert(greeting);
}

function load_ajax() {
    var html_code = $('textarea#html_code').val();
    $.post('http://yrral.net/echo/html.php',
	   {code: html_code}).done(
	       function (data, status, xhr) {
		   data = data.replace(/\\/g, "");
		   $('#ajax_target').html(data);
	       });
}

function counter_object() {
    var count = 0;
    this.count_one = function() { count++; };
    this.get_count = function() { return count; };
}

function test_counter() {
    var c = new counter_object();
    var success = 1;
    for (var i = 0; i < 10; i++) {
	if (c.get_count() != i) {
	    alert("counter is broken!");
	    success = 0;
	    break;
	}
	c.count_one();
    }

    if (success) {
	alert("counter passed test");
    }
}
function validateForm()
{
	var user = document.forms["form"]["username"].value;
	var pass = document.forms["form"]["pass"].value;
	var age = document.forms["form"]["age"].value;
	if (user == null || user == "" || pass == null || pass == "")
  	{
  		alert("username must be filled out");
  		return false;
 	}
	if(age < 0 || age > 150)
	{
		alert("Age is out of bounds");
		return false;
	}
}