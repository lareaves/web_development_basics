function bbeach3js()

{
var theName=document.forms["assignmentForm"]["theName"].value;
var theTel=document.forms["assignmentForm"]["theTel"].value;
var theNumber=document.forms["assignmentForm"]["theNumber"].value;
var theEmail=document.forms["assignmentForm"]["theEmail"].value;

if (theName=="" || theNumber!="3" || theTel == "" || theEmail == "")
 {alert("Make sure all fields are filled, and that the number is 3.")
return false; }


}
