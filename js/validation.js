function validateForm() {

    const firstName = document.getElementById("first-name").value;
    const password = document.getElementById("password").value;
    const confirmPwd = document.getElementById("confirm-pwd").value;

    const firstNameErr = document.getElementById("first-name-err");
    const passwordErr = document.getElementById("password-err");
    const confirmPwdErr = document.getElementById("confirm-pwd-err");


    firstNameErr.textContent = "";
    passwordErr.textContent = ""; 
    confirmPwdErr.textContent = ""; 


    isValid = true;

    /* First name validation :
        - must not be empty
        - at least 15 letters
    */

    if (firstName === "") {
        firstNameErr.textContent = "Please enter your first name";
        isValid = false;
    } else if  (firstName.length > 15) {
        firstNameErr.textContent = "length can not greater than 15 letters";
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