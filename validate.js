function validate(){
  var x=document.forms["230Form"]["fname"].value;
  if (x==null || x=="")
  {
    alert("First name must be filled out");
    return false;
  }
  var x=document.forms["230Form"]["lname"].value;
  if (x==null || x=="")
  {
    alert("Last name must be filled out");
    return false;
  }
  var x=document.forms["230Form"]["year"].value;
  if (x==null || x=="")
  {
    alert("Enter birth year");
    return false;
  }
  else if (x>1995) 
  {
  	 alert("You are to young to fill out this form")
  	 return false;
  }
  var x=document.forms["230Form"]["birthmonth"].value;
  if (x==null || x=="")
  {
    alert("Month must be filled out");
    return false;
  }
  var x=document.forms["230Form"]["email"].value;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
    alert("Not a valid e-mail address");
    return false;
  }
  else if (x==null || x=="") 
  {
  	alert("Enter email address")
  	return false;
  }
}
