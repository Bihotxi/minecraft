function validate(){
const password = document.getElementById("password").value;
if (password == "daniela") {
alert("Login successfully");
window.location = "./minecraft.html"; // Redirecting to other page.
return false;
}
 else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
