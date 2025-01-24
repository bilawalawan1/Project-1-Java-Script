 const form =  document.getElementById('form');
 const username =  document.getElementById('username');
 const email =  document.getElementById('email');
 const passward =  document.getElementById('passward');
 const passward2 =  document.getElementById('passward2');

 //All Functions
 //Function to show error
 function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
 }

 //Function to show succcess
 function shoeSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }
 
 //Function to check if email is valid
 function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
 //This is an event listener for the form on submit
 form.addEventListener('submit',function(e) {
    e.preventDefault();

    if (username.value === '' ) {
        showError(username,'Username is required');
    }else{
        shoeSuccess(username);
    }
    if (email.value === '' ) {
        showError(email,'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email,'Email is invalid')
    }
    else{
        shoeSuccess(email);
    }
    if (passward.value === '') {
        showError(passward,'Passward is required');
    } else {
        shoeSuccess(passward);
    }
    if (passward2.value === '') {
        showError(passward2,'Passward2 is required');
    } else {
        shoeSuccess(passward2);
    }
 })