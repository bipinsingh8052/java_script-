// function f(){
//     return 9;
// }
// f();
// let a=f();
// console.log(a);
// let v=(a,b) =>{
//     return a+b;
// }
// console.log(v(9,1));


//  arrow function shortest return 
// 1. ()=> it take argument and return value.
// 2. =>  it not take any argument it only return it .    
// 3. ()=>()






    // localStorage.setItem("8","hello brother");
    // localStorage.setItem("9","hello broth");
    // localStorage.setItem("arr_bag","dfghjkl");
    // localStorage.removeItem("8");
    // let a= localStorage.getItem("arr_bag");
    // // console.log(a);





    let btn =document.querySelector("#btn");
    btn.addEventListener("click",()=>{
        let a=document.querySelector("#name");
        let b=document.querySelector(".password");
        let c=document.querySelector(".number");
        // console.log(a,b,c);

            localStorage.setItem('1',JSON.stringify(a.value));
            localStorage.setItem('2',JSON.stringify(b.value));
            localStorage.setItem('3',JSON.stringify(c.value));
            let m=document.querySelector(".main h1");
            m.textContent=a.value;
            let n=document.querySelector(".main h2");
            n.textContent=b.value;
            let k =document.querySelector(".main h3");
            k.textContent=c.value;
            console.log(m,n,k);
        
    })

 


    
    let ob={
        name:"bahcbeuy",
        email:"bedfghj",
        tel:567890
        // ~:"ghj"
    }
    // console.log(hasOwnProperty(ob));
for(k in ob){
    console.log(k);
}

for(k in ob){
    console.log(ob[k]);
}
let data;
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    let obj={
        name:"bahcbeuy",
        email:"bedfghj",
        tel:567890
    } 
    let a=document.querySelector("#name_s");
    let b=document.querySelector(".password_s");
    let c=document.querySelector(".number_s");
    // // console.log(a,d,c);
    // console.log("sdfghjk");
    obj.name=a.value;
    obj.email=b.value;
    obj.tel=c.value;
    localStorage.setItem("bipin",JSON.stringify(obj));
})
// localStorage.setItem('data',${ob});
// data++;

let number= JSON.parse( localStorage.getItem("arr_bag"));
let numb= JSON.parse(localStorage.getItem("bipin"));
console.log(number);
console.log(number[0]);
console.log(numb.email);

function sbmit(){
    let obj={
        name:"bahcbeuy",
        email:"bedfghj",
        tel:567890
    } 
    let a=document.querySelector(".namein");
    let b=document.querySelector(".emailin");
    let c=document.querySelector(".passin");
    // // console.log(a,d,c);
    // console.log("sdfghjk");
    obj.name=a.value;
    obj.email=b.value;
    obj.tel=c.value;
    localStorage.setItem("from",JSON.stringify(obj));
    // return false;
}