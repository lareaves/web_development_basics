function test() {
	alert('test');
	return false;
}

function check() {
var pname = document.getElementById("pname");
var pclass = document.getElementById("pclass");
var howGood = document.getElementById("howGood");
var howLawful = document.getElementById("howLawful");
var age = document.getElementById("age");
var hometown = document.getElementById("hometown");
if(pname.value == null || pname.value == "")
{
	alert("Must fill out Name");
	return false;
}
if(hometown.value == null || hometown.value == "")
{
	alert("Must fill out Hometown");
	return false;
}
if(age.value == null || age.value == "")
{
	alert("Must fill out Age");
	return false;
}if(age.value < 18)
{
	alert("Must be 18 years or older to adventure");
	return false;
}

}
