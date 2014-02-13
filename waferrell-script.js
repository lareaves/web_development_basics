//Form validation function
function validateForm()
{
	var firstname=document.forms["inputForm"]["fname"].value;
	var lastname=document.forms["inputForm"]["lname"].value;
	var age=document.forms["inputForm"]["age"].value;
	if (firstname==null || firstname=="")
	{
		alert("First name must be filled out!");
		return false;
	}
	else if (lastname==null || lastname=="")
	{
		alert("Last name must be filled out!");
		return false;
	}
	else if (age==null)
	{
		alert("Age must be filled out!");
		return false;
	}
	else if (age==0)
	{
		alert("You cannot be 0 years old.");
		return false;
	}
	else if (age < 0)
	{
		alert("You cannot be negative years old.");
		return false;
	}
}

//Gloabals for animation
var imgArray = new Array("images/img1.jpg","images/img2.jpg","images/img3.jpg");
var imgCount = 0;

//Timer for animation!
function animateImages()
{
    if(imgCount == imgArray.length) 
	{
        imgCount = 0;
    }
    document.getElementById("img1").src = imgArray[imgCount];
    imgCount++;
    setTimeout("animateImages()", 2000);
}

//everything aligned left!
function divLeft()
{
	var e = document.getElementById('content');
	e.style.marginLeft = '0';
	e.style.marginRight = 'auto';
	
}

//everything aligned center!
function divCenter()
{
	var e = document.getElementById('content');
	e.style.marginLeft = 'auto';
	e.style.marginRight = 'auto';
}

//everything aligned right!
function divRight()
{
	var e = document.getElementById('content');
	e.style.marginRight = '0';
	e.style.marginLeft = 'auto';
}

function test()
{
	alert("TESTING!");
}