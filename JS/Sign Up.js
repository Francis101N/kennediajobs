const Form = document.querySelector('form');
const Output = document.querySelector('.outPut');
const dataBase = [];
console.log(dataBase)

Form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form elements
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const createpassword = document.getElementById("createpassword").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    // Validate first name
    if (firstname == "") {
        Output.innerHTML = "First name is required."
        return false;
    }

    // Validate last name
    if (lastname == "") {
        Output.innerHTML = "Last name is required."
        return false;
    }

    // Validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "") {
        Output.innerHTML = "Email address is required."
        return false;
    } else if (!email.match(emailPattern)) {
        Output.innerHTML = "Please enter a valid email address."
        return false;
    }

    // Validate phone number
    if (phonenumber == "") {
        Output.innerHTML = "Phone number is required."
        return false;
    } else if (isNaN(phonenumber) || phonenumber.length < 10) {
        Output.innerHTML = "Please enter a valid phone number."
        return false;
    }

    // Validate password
    if (createpassword == "") {
        Output.innerHTML ="Password is required."
        return false;
    } else if (createpassword.length < 6) {
        Output.innerHTML ="Password must be at least 6 characters long."
        return false;
    }

    // Validate confirm password
    if (confirmpassword == "") {
        Output.innerHTML ="Please confirm your password."
        return false;
    } else if (createpassword !== confirmpassword) {
        Output.innerHTML ="Passwords do not match."
        return false;
    }

    if (firstname!==""&& lastname!==""&&email!==""&&phonenumber!==""&& createpassword!==""&&confirmpassword!==""){
        const details = {
            FIRSTNAME:firstname,
            LASTNAME:lastname,
            EMAIL: email,
            PHONENUMBER: phonenumber,
            CREATEPASSWORD: createpassword,
            CONFIRMPASSWORD:confirmpassword
        }
        dataBase.push(details);
        Output.innerHTML="Form Submitted Succesfully."
    }
    setTimeout(()=>{
        Output.innerHTML=""
    },4000)
    Form.reset();
});


