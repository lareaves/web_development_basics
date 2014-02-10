function start() 
{
	var submitObj = document.getElementById('sub');
    submitObj.disabled = true;
}

function agreeTerms(stuff)
{
	var submitObj = document.getElementById('sub');
	if(stuff.checked == true)
	{
		if($('#name').val()!='')
		{
			if($('#quantity').val()=='1' || $('#quantity').val()=='2' || $('#quantity').val()=='3' || $('#quantity').val()=='4')
			{
				submitObj.disabled = false;		
			}
		}
	}
	
	else
	{
		submitObj.disabled = true;
	}
}
