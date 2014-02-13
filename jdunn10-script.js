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

function validateInfoForm()
{
var fn=document.forms["infoForm"]["fname"].value;
var ln=document.forms["infoForm"]["lname"].value;
var gen=document.forms["infoForm"]["gender"].checked;
var usr=document.forms["infoForm"]["uname"].value;
var pass=document.forms["infoForm"]["pass"].value;
if (fn==null || fn=="" || ln==null || ln=="" || gen==false || 
	usr==null || usr=="" || pass==null || pass=="")
	{
	alert("First name, last name, gender, username, and password are required.");
	return false;
	}
if (pass.length < 8)
	{
	alert("Password must be at least 8 characters in length.");
	return false;
	}
alert("Form succesfully submited.");
return true;
}

function thumbsUp()
{
if(document.getElementById("falloutBoy").src=="http://25.media.tumblr.com/3f20e649960a42bf9f46e4b8da244db9/tumblr_mxp9bj5ZCQ1r7qbrco1_1280.jpg")
	{
	document.getElementById("falloutBoy").src="http://static1.wikia.nocookie.net/__cb20090201113851/fallout/images/c/c3/Fallout3e.jpg";
	}else 
	{
	document.getElementById("falloutBoy").src="http://25.media.tumblr.com/3f20e649960a42bf9f46e4b8da244db9/tumblr_mxp9bj5ZCQ1r7qbrco1_1280.jpg";
	}
}

function nuka()
{
	document.getElementById("falloutBoy").src="http://images4.wikia.nocookie.net/__cb20110328200449/fallout/images/e/e4/18_The_Nuka-Cola_Challenge_(2).png";
}