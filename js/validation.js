function validateForm() {

    const firstName = document.getElementById("first-name").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPwd = document.getElementById("confirm-pwd").value;
    

    const firstNameErr = document.getElementById("first-name-err");
    const phoneErr = document.getElementById("phone-err");
    const passwordErr = document.getElementById("password-err");
    const confirmPwdErr = document.getElementById("confirm-pwd-err");


    firstNameErr.textContent = "";
    phoneErr.textContent = "";
    passwordErr.textContent = ""; 
    confirmPwdErr.textContent = ""; 


    isValid = true;

    /* First name validation :
        - must not be empty
        - at most 15 letters
    */

    if (firstName === "") {
        firstNameErr.textContent = "Please enter your first name";
        isValid = false;
    } else if  (firstName.length > 15) {
        firstNameErr.textContent = "Length can not greater than 15 letters";
        isValid = false;
    }

    /* phone validation
        - XXXXXXXXXX or (XXX)XXX-XXXX or XXX-XXX-XXXX where X is a digit
        - use regular expression
    */

    let regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!regex.test(phone)) {
        phoneErr.textContent = "Enter a valid phone number";
        isValid = false;
    }

    /* password validation 
        - password length must be greater or equal to 6 and less or equal to 20
    */

    let len = password.length;
    if ((len < 6) || (len > 20)) {
        passwordErr.textContent = "Must be 6-20 charaters";
        isValid = false;
    }

    /* confirm password validation
        - confirm password must be the same as password
    */

    if (password !== confirmPwd) {
        confirmPwdErr.textContent = "This must be the same as password";
        isValid = false;
    }
    
    if (isValid) {
        const successSubmit = document.getElementById("submit-success");
        successSubmit.setAttribute("data-submit", "success");
    } 

    /*  It should be return isValid.
        The reason to hardcoded return false is because that way
        form will not be reset. 
    */
    //return isValid;
    return false;
}