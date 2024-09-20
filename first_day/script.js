function pra(){
    let a =parseInt(window.prompt("Enter Your salary"));
    if(a<350000){
        window.alert("Less than 3.5 lakh you dont want to pay tax");
    }
    else if(a>350000&&a<800000){
        var b =(a/100)*10;
        console.log(b);
    }
    else if(a>=800000){
        var b =(a/100)*10;
        console.log(b);
    }
    else{
        console.log("invalide input");
    }
}
