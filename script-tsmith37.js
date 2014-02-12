function greet() {
    var greeting = 'Hello, ' + $('#name').val() + '!';
    alert(greeting);
}

function load_ajax() {
    var html_code = $('textarea#html_code').val();
    $.post('http://yrral.net/echo/html.php',
	   {code: html_code}).done(
	       function (data, status, xhr) {
		   data = data.replace(/\\/g, "");
		   $('#ajax_target').html(data);
	       });
}

function counter_object() {
    var count = 0;
    this.count_one = function() { count++; };
    this.get_count = function() { return count; };
}

function test_counter() {
    var c = new counter_object();
    var success = 1;
    for (var i = 0; i < 10; i++) {
	if (c.get_count() != i) {
	    alert("counter is broken!");
	    success = 0;
	    break;
	}
	c.count_one();
    }

    if (success) {
	alert("counter passed test");
    }
}

function test_dis() {
    var wrongAnimal = 'No, that should NOT be your favorite animal';
    var notChecked = 'No, you did not check the box';
    if (($('#name').val() != 'dog') && ($('#name').val() != 'Dog') && ($('#name').val() != 'DOG'))
    {
	alert(wrongAnimal);
	return false;
    }
    if (!check.checked)
    {
	alert(notChecked);
	return false;
    }
}

function domMan()
{
document.getElementById('field').innerHTML = 'No';
}
function validateForm()
{
    var x=document.forms["form1"]["name"].value;
    var y=document.forms["form1"]["check"].checked;
    var z=document.forms["form1"]["prefer"];
    var a=z[1].checked;


    if (x==null || x=="")
    {
	alert("Surely you have a favorite animal");
	return false;
    }
    if(y == false)
    {
	alert("You should have checked that");
	return false;
    }
    if(!a)
    {
      alert("No, you must not pick that preference");
      return false;
    }
}


