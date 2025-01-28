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
 //Function to check if required field have data  
 function checkRequired (inputArray) {
    inputArray.forEach(function(input) {
        if ( input.value === '' ) {
            console.log(input.id);
       showError(input,`${getFieldId(input)} is required`);
    } else {
        shoeSuccess(input);
    }
    });
 }
 //Function to get the id of the input field with proper case
 function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

//This is an event listener for the form on submit
form.addEventListener('submit',function(e) {
   e.preventDefault();

   checkRequired([username,email,passward,passward2]);
})