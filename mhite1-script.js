function valid(){
    var valid =true;
    var fname = $('form input#fname').val();
    var lname = $('form input#lname').val();
    var age = $('form input#age').val();
    var sex =$('form input#male').val();
    if(sex == null){
	alert("Must enter a sex!");	
	valid = false;
    }else if (fname == ""){
	alert("First Name cannot be Blank!");
	valid = false;
	}else if (lname == ""){
	alert("Last Name cannot be Blank!");
	valid = false;
    }else if (Number(age)<0 || Number(age) >100 || age ==""){
	alert("Age must be between 0 and 100.");
	valid = false;
    }
    return valid;
}