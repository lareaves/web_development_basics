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
    var response = 'No, that is not correct';
    var greeting = 'Yes, that is correct';
    if ($('#name').val() == 'dog')
	alert(greeting);
    else if ($('#name').val() == 'DOG')
	alert(greeting);
    else if ($('#name').val() == 'Dog')
	alert(greeting);
    else
	alert(response);
}



