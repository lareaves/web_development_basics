function validate(document)
{
	var mnth=$('#month').val();
	var day=$('#day').val();
	var year=$('#year').val();
	
		if(mnth=="apr" || mnth=="jun" || mnth=="sep" || mnth=="nov")
		{
			if(day>30)
			{
				alert("Invalid date");
				
			}
			else
			{
				 var greeting = 'Hello, ' + $('#first').val() + '!';
    			alert(greeting);
			}
		}
		else if(mnth=="feb" )
		{
			
			if(day > 29 || day == 29 && (year % 4 > 0  || year % 100 == 0) && year % 400 > 0)
			{
				alert("Invalid date");
			
			}
			else
			{
				 var greeting = 'Hello, ' + $('#first').val() + '!';
   				 alert(greeting);
			}
		}
		else
		{
			 var greeting = 'Hello, ' + $('#first').val() + '!';
   			 alert(greeting);
		}
		
}// JavaScript Document