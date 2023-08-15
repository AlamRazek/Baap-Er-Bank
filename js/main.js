const btnSubmit = document.getElementById('btn-submit');
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
// step 1. add click eventhandler with submit button

btnSubmit.addEventListener('click', function() {
    // step 2: get the email address
    const userEmailValue = userEmail.value;
    // step 3: get password
    // set id on the html elements
    const UserPasswordValue = userPassword.value;
    if (userEmailValue === 'bapbeta@teka.com' && UserPasswordValue === 'secret123') {
        window.location.href = "bank.html";
    } else {
        alert('invalid User')
    }

})