const Form = document.querySelector('form');
const Output = document.querySelector('.outPut');
const dataBase = [];
console.log(dataBase)

Form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form elements
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "") {
        Output.innerHTML = "Email address is required."
        return false;
    } else if (!email.match(emailPattern)) {
        Output.innerHTML = "Please enter a valid email address."
        return false;
    }

    // Validate password
    if (password == "") {
        Output.innerHTML ="Please confirm your password."
        return false;
    }

    if (email!=="" && password!==""){
        const details = {
            EMAIL: email,
            PASSWORD:password
        }
        dataBase.push(details);
        Output.innerHTML="Form Submitted Succesfully."
    }
    setTimeout(()=>{
        Output.innerHTML=""
    },4000)
    Form.reset();
});


