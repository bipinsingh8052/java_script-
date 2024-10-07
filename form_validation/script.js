function data(){
    
    let input=document.querySelector("#text");
    let num =document.querySelector("#num");
    let black =document.querySelector("#black");
    let pass =document.querySelector("#password");
    let cpass =document.querySelector("#cpassword");
    // black.value=input.value+num.value;
    // console.log(input.value);

    console.log(pass.value)

    // console.log(show);
    
    if(input.value == ""){
        let show=document.querySelector(".input");
        show.innerHTML = "your con't Enter the name";
        show.style.color="black";
        input.style.border="2px solid red";
        input.style.outlineColor="red";
        console.log(show);
            // window.alert("Enter the name:");
            return false;
    }
    else if(isNaN(num.value)){
        document.querySelector('.passworderr').innerHTML = "mobile number should integer only";
        let selectname = document.querySelector('#mobile');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }
    else if(num.value.length !== 10){
        document.querySelector('.passworderr').innerHTML = "mobile number should be 10 digit";
        let selectname = document.querySelector('#mobile');
        selectname.style.borderColor = "red"
        selectname.style.outlineColor = "red"
        return false;
    }
    else if(!(pass.value=== cpass.value)){
        pass.value="";
        cpass.value="";
        pass.focus();
        return false;
    }
    else if(!(pass.value.match(/[1234567890]/)
        && pass.value.match(/[qwertyuiopasdfghjklzxcvbnm]/)
       && pass.value.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
       && pass.value.match(/[!@#$%^&*~``';]/)))
        {
        let show=document.querySelector(".numerror");
        show.innerHTML = "your pasword is not strong please write again.";
        show.style.color="black";
        input.style.border="2px solid red";
        input.style.outlineColor="red";
        // console.log(show);
        return false;
    }
    else if(!(black.value.includes('@') && black.value.includes(".com"))){
        document.querySelector('.lasterror').innerHTML = "Please enter valid email";
        let selectname = document.querySelector('#email');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";
        return false;
    }
    
    // else if(num.value == ""){
    //     let show=document.querySelector(".passworderr");
    //     show.innerHTML = "your con't inter the name";
    //     show.style.color="black";
    //     input.style.border="2px solid red";
    //     input.style.outlineColor="red";
    //     console.log(show);
    //         // window.alert("Enter the name:");
    //         return false;
    // }
    // else if(pass.value == ""){
    //     let show=document.querySelector(".numerror");
    //     show.innerHTML = "your con't inter the name";
    //     show.style.color="black";
    //     input.style.border="2px solid red";
    //     input.style.outlineColor="red";
    //     console.log(show);
    //         // window.alert("Enter the name:");
    //         return false;
    // }
    // else if(black.value == ""){
    //     let show=document.querySelector(".lasterror");
    //     show.innerHTML = "your con't inter the name";
    //     show.style.color="black";
    //     input.style.border="2px solid red";
    //     input.style.outlineColor="red";
    //     console.log(show);
    //         // window.alert("Enter the name:");
    //         return false;
    // }
    
   

    // else if(pass.type="password"){

    //     pass.type="text";
    //     return false;
    // }
    // else if(pass.type="text"){
    //     pass.type="password";
    //     return false;
    // }


    // else if()
    return true;
    
}
// if(input.value === ""){
//     show.innerHTML = "your con't inter the name";
//         show.style.color="black";
//         show.style.display="none";

// }else{
//     show.style.display="none";
// }
function b(a,b){
    let name = document.querySelector(`${b}`);
    console.log(name);
    
    let erroeinput = document.querySelector(`${a}`);
    console.log(erroeinput);
    name.style.border="2px solid black";
    name.style.outlineColor="black";
    // erroeinput.style.display="none";
    erroeinput.innerHTML="";
    // console.log(name);
    // console.log(erroeinput);
}






// function o(){
//     let name = document.querySelector("#num");
//     let erroeinput = document.querySelector(".passworderr");
//     name.style.border="2px solid black";
//     name.style.outlineColor="black";
//     // erroeinput.style.display="none";
//     erroeinput.innerHTML="";
//     console.log(name);
//     console.log(erroeinput);
// }
// function n(){
//     let name = document.querySelector("#password");
//     let erroeinput = document.querySelector(".numerror");
//     name.style.border="2px solid black";
//     name.style.outlineColor="black";
//     // erroeinput.style.display="none";
//     erroeinput.innerHTML="";
//     console.log(name);
//     console.log(erroeinput);
// }

// function m(){
//     let name = document.querySelector("#black");
//     let erroeinput = document.querySelector(".lasterror");
//     name.style.border="2px solid black";
//     name.style.outlineColor="black";
//     // erroeinput.style.display="none";
//     erroeinput.innerHTML="";
//     console.log(name);
//     console.log(erroeinput);
// }