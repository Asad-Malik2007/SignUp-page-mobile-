//Input boxes
let nameInput=document.querySelector("#name-area");
let emailInput=document.querySelector("#email-area");
let passwordInput=document.querySelector("#password-area");
//Message lines
let greetEl=document.querySelector("#greetmsg");
let emailEl=document.querySelector("#emailmsg");
let passwordEl=document.querySelector("#passwordmsg");
let successEl=document.querySelector("#successmsg");
//Greet Function
function greet(){
  //Values of Input boxes
  let name=nameInput.value
  let email=emailInput.value
  let password=passwordInput.value
  //Booleans Initally False
  isNameValid=false
  isEmailValid=false
  isPasswordValid=false
  //For Name
  if (name===""){
    greetEl.innerText="Please enter name!!"
    greetEl.style.color="red"
  }
  else if(/[".,#@$&+"]/.test(name)){
    greetEl.innerText="Invalid Name!"
    greetEl.style.color="red"
  }
  else {
    let tmsg="Hello! "+name+" 🤗"
    greetEl.innerText=tmsg
    greetEl.style.color="black"
    
    isNameValid=true
  }
  //For Email
  if (email==="") {
    emailEl.innerText="Please enter email!!"
    emailEl.style.color="red"
  }
  else if(email.includes("@gmail.com")){
    let emailUsername=email.split('@')[0];
    if(emailUsername.length>=6&&emailUsername.length<=15){
    let emsg="Valid Email ✅"
    emailEl.innerText=emsg
    emailEl.style.color="black"
    
    isEmailValid=true
    }
    else{
    emailEl.innerText="Invalid Email"
    emailEl.style.color="red"
  }
  }
  else{
    emailEl.innerText="Invalid Email"
    emailEl.style.color="red"
  }
  //For Password
  if (password===""){
    passwordEl.innerText="Please enter Password!!"
    passwordEl.style.color=" red"
  }
  else if(password.length>=6 && password.length<=18){
      if(/[.#@$&-_]/.test(password)){
    let pmsg="Valid Password ✅"
    passwordEl.innerText=pmsg
    passwordEl.style.color="black"
    isPasswordValid=true
  }
  else{
    passwordEl.innerText="Password must include special characters & numbers"
    passwordEl.style.color="red"
    passwordEl.style.width="260px"
  }
  }
  else {
    passwordEl.innerText="Invalid Password!!"
    passwordEl.style.color="red";
  }

  //Success Message
  if(isNameValid && isEmailValid && isPasswordValid){
    successEl.innerText="Sign Up Successful!! 🎉"
    successEl.style.color="#11FB04"
  }
  else{
    successEl.innerText=""
  }
}

function togglePassword(){
  passwordInput=document.querySelector("#password-area")
  
  let eyeIcon=document.querySelector("#eye-icon");
  if(passwordInput.type==="password"){
    passwordInput.type="text"
  }
  else{
    passwordInput.type="password"
  }
}
// This function will be removed after doing backend
function UserForgot(){
  successEl.innerText="Sorry to hear that!! 😞"
  successEl.style.color="#3A3B3D"
}

// This function will be removed after doing backend
function logoBtn(){
  successEl.innerText="Sorry!! No backend yet"
}