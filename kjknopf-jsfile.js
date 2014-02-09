function formVamidate()
{
    var name = document.forms["assignment2Form"]["name"].value;
    var score = document.forms["assignment2Form"]["score"].value;
    var birthday = document.forms["assignmentForm"]["birthdate"].value;
    var status = document.forms["assignment2Form"]["status"].value;

    if(name == null || name == "")
    {
	alert("Name is a required field");
	return false;
    }

    if(score == null || score < 200 || score > 2400)
    {
	alert("SAT score must be between 200 and 2400");
	return false;
    }

    if(birthday == null || birthday == "")
    {
	alert("Birthdate is a required field");
	return false;
    }

    if(status == null)
    {
	alert("Status is a required field");
	return false;
    }
}