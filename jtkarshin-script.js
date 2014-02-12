function empty(x) {
    return x == null || x == "";
}

function validate() {
    if(empty(document.getElementById("name").value)) {
        alert("Please enter a name.");
	return false;
    }

    var level = parseFloat(document.getElementById("level").value);
    if(level % 1 != 0 || level <= 0) {
        alert("Please enter a positive integer level.");
        return false;
    }

    if(empty(document.getElementById("town").value)) {
        alert("Please enter a home town.");
	return false;
    }

    return true;
}
