function validate() {
		var q=document.forms["form"]["text1"].value;
		var r=document.forms["form"]["text2"].value;
		var s=document.forms["form"]["text3"].value;
		var t=document.forms["form"]["text4"].value;
		
		if (q==null||q=="") {
			alert("TEXT BOX CANNOT BE LEFT EMPTY.");
			return false;
		}
		else if (r<1||r>9) {
			alert("NUMBER MUST BE BETWEEN 0 AND 10.");
			return false;
		}
		else if (s=="#000000") {
			alert("MUST MODIFY COLOR.");
			return false;
		}
		else if (t==null||t=="") {
			alert("MUST SELECT A FILE.");
			return false;
		}
		
	}