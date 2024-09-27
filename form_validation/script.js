let input=document.querySelector("#text");
let num =document.querySelector("#num");
let black =document.querySelector("#black");
let pass =document.querySelector("#password");
let show=document.querySelector(".input");
function data(){
    
   
    black.value=input.value+num.value;
    console.log(input.value);

    console.log(pass.value)

    console.log(show);
    
    if(input.value === ""){
       
        show.innerHTML = "your con't inter the name";
        show.style.color="black";
        // console.log(show);
            // window.alert("Enter the name:");
            return false;
    }

    else if(pass.type="password"){

        pass.type="text";
        return false;
    }
    else if(pass.type="text"){
        pass.type="password";
        return false;
    }
    return true;
    
}
if(input.value === ""){
    show.innerHTML = "your con't inter the name";
        show.style.color="black";
        show.style.display="none";

}else{
    show.style.display="none";
}