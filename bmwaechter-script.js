function validate()
{
  var n = document.forms["myForm"]["name"].value;
  if(n == null || n == "")
  {
    alert("You must enter a name");
    return false;
  }
  
  var e = document.forms["myForm"]["email"].value;
  alert("email: " + e);
  if(e == "" || e == null || e.substring("@") == -1 || e.substring(".") == -1)
  {
	alert("You must enter a valid email address yeah");
	return false;
  }
  
  var p1 = document.forms["myForm"]["pass"].value;
  var p2 = document.forms["myForm"]["passConf"].value;
  
  if(p1 != p2)
  {
	alert("Your passwords do not match!");
	return false;
  }
}

function startMarquee()
{
  document.getElementById("mq").start();
}

function stopMarquee()
{
  document.getElementById("mq").stop();
}

function changeDirection()
{
  var m = document.getElementById("mq");
  if(m.direction == "right")
  {
	m.direction = "left";
  }
  else
  {
	document.getElementById("mq").direction = "right";
  }
}

