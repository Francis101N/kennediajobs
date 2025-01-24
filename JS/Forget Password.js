const Form = document.querySelector("form");
const Output = document.querySelector("#output");
const Database = []; 
console.log(Database)

Form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const email = document.querySelector("#email");

   validation(email);
   validateEmailFormat(email);
   
   email.value = ""
    
   setTimeout(() => {
    Output.innerHTML = " "; 
     },4000);  

})

function validation(email){
    if(email.value === ''){
        Output.innerHTML = "Email Input Can't be Empty!"
    }
    else{
        const Email = {
            Email:email.value,
           }
         Database.push(Email)
         Output.innerHTML = "Email Submitted Successfully!"
    }
}

function validateEmailFormat(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}