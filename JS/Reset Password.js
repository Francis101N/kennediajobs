const Form = document.querySelector("form");
const Output = document.querySelector("#output");
const Database = []; 
console.log(Database)

Form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const Newpassword = document.querySelector("#newpassword");
    const Confirmpassword = document.querySelector("#confirmpassword");

    validation(Newpassword,Confirmpassword);
   
   setTimeout(() => {
    Output.innerHTML = " "; 
     }, 5000);  

})

function validation(newpass,confirmpass){
    if(newpass.value==="" && confirmpass.value===""){
        Output.innerHTML = "No Input Should Be Left Empty!"
    }
    else if (newpass.value==="" || confirmpass.value===""){
        Output.innerHTML = "Both Input Must Be provided!"
    }
    else if(newpass.value !== confirmpass.value){
        Output.innerHTML = "Passwords Do Not Match, Please Try again!"
    }
    else{
        const Password = {
            Newpassword:newpass.value,
            Confirmpassword:confirmpass.value
           }
         Database.push(Password)
         Output.innerHTML = "Passwords Submitted Successfully!"
    }
    newpass.value = "";
    confirmpass.value = "";
}