function sayIsDead(){
     var isDead=$('#name').val()+' is dead!';
     if($('#name').val()==""){
     	alert("must put character name");
     return false;
     } else{
     alert(isDead);
  }
}

function hello(){
alert('A very lonely button...');
}