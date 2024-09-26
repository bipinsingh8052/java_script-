
function data(){
    let input=document.querySelector("#text");
    let num =document.querySelector("#num");
    let black =document.querySelector("#black");
    black.value=input.value+num.value;
    console.log(input.value);
    if(input.value == "")

        {
            window.alert("Enter the name:");
            return false;
        }
    return false;
    
}