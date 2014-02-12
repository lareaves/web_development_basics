function validate()
{
  var n = document.forms["myForm"]["name"].value;
  if(n == null || n == "")
  {
    alert("You must enter a name")
    return false;
  }
}
