function validate(age,m,f,email){	
	if(age.value<0 || age.value==""){
		alert("Invalid Age");
		return false;
	}
	else if(m.checked==false && f.checked==false){
		alert("Please Check A Gender");
		return false;
	}
	else if(email.value==""){
		alert("Please Type An Email");
		return false;
	}
	else {document.getElementById('submit').click();}
}
