const Form = document.querySelector("form");
const Output = document.querySelector("#output");
const Database = []; 
console.log(Database)

Form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const Input1 = document.querySelector("#numberone").value;
    const Input2 = document.querySelector("#numbertwo").value;
    const Input3 = document.querySelector("#numberthree").value;
    const Input4 = document.querySelector("#numberfour").value;

    data(Input1,Input2,Input3,Input4)

    setTimeout(() => {
        Output.innerHTML = " "; 
         }, 5000);  
})

function data(input1,input2,input3,input4){
    if(input1 ==="" && input2 ==="" && input3 ==="" && input4 ===""){
        Output.innerHTML ="No Input Should Be Left Empty!"
    }
    else if(input1==="" || input2==="" || input3==="" || input4===""){
        Output.innerHTML ="All Input Must Be provided!"
    }
    else{
        const Data = {
            data1 : input1,
            data2 : input2,
            data3 : input3,
            data4 : input4,
        }
        Database.push(`${Data.data1}${Data.data2}${Data.data3}${Data.data4}`);
        Output.innerHTML = `${Data.data1}${Data.data2}${Data.data3}${Data.data4} Confirmed Successfully!`;
    }

    Form.reset()
}