// let a,b,c,d;
function submit(){
    let pass=document.querySelector("input");
    console.log(pass.value);
     if(!(pass.value.match(/[1234567890]/)
        && pass.value.match(/[qwertyuiopasdfghjklzxcvbnm]/)
       && pass.value.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
       && pass.value.match(/[!@#$%^&*~``';]/)))
        {
        let show=document.querySelector(".pass");
        show.innerHTML = "your pasword is not strong please write again.";
        show.style.color="black";
        input.style.border="2px solid red";
        input.style.outlineColor="red";
        // console.log(show);
        return false;
    }
   
    window.alert("You enter the strong password");
    return true;
    
}
  


// first question 

// function first(){
//     let a = 120000;
//     let b = 1200000;
//     let c = 120000000;
//     let d = (a + b + c) / 3;
//     window.alert("Average of three no. =" + d);
// }
// first();



// function second(){
//     var a = parseFloat(window.prompt("Enter Your Salary"));
//     if(a<300000){
//         window.alert("you dont have to pay any tax")
//     }
//     else if(a>=300000 && a<750000){
//         var tax = parseFloat((a/100)*10);
//         window.alert("you have to pay "+ tax +" as tax");
//     }
//     else if(a>=750000){
//         var tax = parseFloat((a/100)*20);
//         window.alert("you have to pay "+ tax +" as tax");
//     }
//     else{
//         window.alert("Invalid Input");
//     }


// }
// second();


// question five();
function Submit(){
    let a=document.querySelector("#name").value;
    let doing=document.querySelector("#doing").value;
    let phone=document.querySelector("#phone").value;
    let email=document.querySelector("#email").value;
    let add=document.querySelector("#address").value; 
    let conatiner =document.querySelector(".conatiner");
    conatiner.style.display="block";
    conatiner.innerHTML=`
     <h1 class="name">${a}</h1>
    <p class="doing">${doing}</p>
    <p class="phone">${phone}</p>
    <p class="email">${email}</p>
    <p class="address">${add}</p>`;
    
}



// four question 

function public(){
        let a = document.querySelector("img");
        let b= document.querySelector(".overlay");

        b.style.zIndex="0";
        a.style.zIndex="1";
    //     a.style.scale = "1.2";
       b.style.transition = "z-index 10s ease";

}
function normal(){
    let a = document.querySelector("img");
        let b= document.querySelector(".overlay");
        b.style.zIndex="1";
        a.style.zIndex="0";
    //    a.style.scale = "1"; 
       b.style.transition ="z-index 5s";

}


