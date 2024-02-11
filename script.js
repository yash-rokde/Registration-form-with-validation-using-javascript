 // accessing all required fields
 const validName = /^[A-Za-z]+$/;
 const validContact = /^[0-9]+$/;
 const alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
 const alphanumericplusspecial = /^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$/;
 const firstName = document.querySelector("#firstname").children;
 const lastName = document.querySelector("#lastname").children;
 const pass = document.querySelector("#password").children;
 const cpass = document.querySelector("#cpassword").children;

 // fields to check the status of each function
 let validfirstnamestatus = false;
 let validcontactstatus = false;
 let validlastnamestatus = false;
 let passmatchstatus = false;

 // function that clears error message
 function clearerrmsg(idx) {
   let errormsg = document.getElementById(idx).children;
   errormsg[2].innerText = "";
 }

 // function that sets error message
 function setError(idx, errormsg) {
   let ele = document.getElementById(idx).children;
   ele[2].innerText = errormsg;
 }

 // function to check first name of person that only contains characters no whitespace are allowed
 function validateFirstName() {
   const firstNameValue = firstName[1].value;
   if (!firstNameValue.match(validName)) {
     setError("firstname", "Name should only contain characters..");
     validfirstnamestatus = false;
   } else {
     clearerrmsg("firstname");
     validfirstnamestatus = true;
   }
 }

 // function to check last name of person that only contains characters no whitespace are allowed

 function validateLastName() {
   const lastNameValue = lastName[1].value;
   if (!lastNameValue.match(validName)) {
     setError("lastname", "Name should only contain characters..");
     validlastnamestatus = false;
   } else {
     clearerrmsg("lastname");
     validlastnamestatus = true;
   }
 }

 // function that checks whenther entered contact no. is correct or not
 function validateContact() {
   let contact = document.querySelector("#contact_id").children;
   const contactValue = contact[1].value;
   const contactlength = contactValue.length;
   if (contactlength < 10 || contactlength > 10) {
     setError("contact_id", "Max length of contact should be 10");
     validcontactstatus = false;
   } else {
     clearerrmsg("contact_id");
     if (contactValue.match(validContact)) {
       clearerrmsg("contact_id");
       validcontactstatus = true;
     } else {
       setError("contact_id", "Number should only contain digits..");
       validcontactstatus = false;
     }
   }
 }

 // function that checks the password strength
 function passwordStrength() {
   const passvalue = pass[1].value;
   console.log(passvalue);
   console.log(typeof passvalue);
   if (passvalue === "") {
     pass[2].innerText = "please enter correct password";
     pass[2].style.color = "red";
     return;
   }
   if (passvalue.match(validName) || passvalue.match(validContact)) {
     console.log("inside weak");
     pass[2].innerText = "weak password";
     pass[2].style.color = "red";
     return;
   }
   if (passvalue.match(alphanumeric)) {
     console.log("inside intermediate");
     pass[2].innerText = "intermediate password";
     pass[2].style.color = "orange";
     return;
   }
   console.log((pass[2].innerText = "strong password"));
   pass[2].style.color = "green";
 }

 // function to check whether password and confirm password matches or not
 function matchPassword() {
   const passvalue = pass[1].value;
   const cpassvalue = cpass[1].value;
   console.log(cpassvalue);

   if (cpassvalue === passvalue) {
     clearerrmsg("cpassword");
     return true;
   } else {
     setError("cpassword", "Password and confirm password are not matched!");
     return false;
   }
 }

 // function to submit the form if all fields are correctly validated
 function validateForm() {
   let checkpassstatus = matchPassword();

   if (checkpassstatus === false) {
     alert("password and confirm password are not matched");
     return false;
   }
   if (validfirstname && validlastname && validcontact) {
     return true;
   } else {
     return false;
   }
 }