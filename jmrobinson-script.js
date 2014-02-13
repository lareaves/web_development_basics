function start() 
{
	var submitObj = document.getElementById('submit');
    	submitObj.disabled = true;
}

function unlock(chkbox)
{
	var submitObj = document.getElementById('submit');
	if(chkbox.checked == true)
	{
		if($('#name').val()!='')
		{
			if($('#addition').val()=='3')
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