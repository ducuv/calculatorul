function sendMail(){
  var firstname = document.forms["myForm"]["firstname"].value;
  var lastname = document.forms["myForm"]["lastname"].value;
  var mail = document.forms["myForm"]["e-mail"].value;
  if(firstname==""){
    window.alert("fill firstname");
  }
  else if(lastname=="")
  {
    window.alert("fill lastname");
  }
  else if (mail=="") {
    window.alert("fill e-mail");
  }
  else
  window.alert("Hello "+ firstname +"  "+ lastname + " Mail was sent to " + mail);

}
