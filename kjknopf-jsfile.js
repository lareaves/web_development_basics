function formValidate()
{

    var name = $('form assignment2form#name').val();
    var score = $('form assignment2form#score').val();
    var birthday = $('form assignment2form#birthdate').val();
    var status = $('form assignment2form#status').val();

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