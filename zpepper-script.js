function increase5()
{
	var num =parseInt(document.getElementById("theNumber").value);
	num+=5;
	document.getElementById("theNumber").value=num;
}

function double()
{
	var num=parseInt(document.getElementById("theNumber").value);
	num*=2;
	document.getElementById("theNumber").value=num;
}

function validateNum()
{
	var num=parseInt(document.getElementById("theNumber").value);
	var validNum=((num>=1)&&(num<=100));
	if(!validNum)
	{
	alert("SUBMIT FAILED: Number must be between 1 and 100");
	}
	return validNum;
}

function validateDate()
{
	var input_date=new Date(document.getElementById("theDate").value);
	input_date=new Date(input_date.getTime() + input_date.getTimezoneOffset()*60*1000);
	input_date.setHours(0, 0, 0, 0);

	var todays_date = new Date();
	todays_date.setHours(0, 0, 0, 0);
	var dates_equal=(todays_date.valueOf()==input_date.valueOf());
	
	if(!dates_equal)
	{
	alert("SUBMIT FAILED: You entered the wrong date");
	}
	return dates_equal;
}

function validateText()
{
	var input_string=document.getElementById("boxed_text").value;
	var is_not_empty=input_string!="";
	var radio_inputs=document.getElementsByName("radio_val");
	var radio_val="None";
	for(var i=0; i<radio_inputs.length; i++)
	{
		if(radio_inputs[i].checked)
		{
			radio_val=radio_inputs[i].value;
		}
	}
	
	var valid=(is_not_empty&&(radio_val=="yes"))||(!is_not_empty&&(radio_val=="no"));
	if(!valid)
	{
	alert("SUBMIT FAILED: Your answer doesn't match the text you entered");
	}
	return valid;
}

function customValidate()
{
	var valid=(validateNum()&&validateDate()&&validateText());
	return valid;
}