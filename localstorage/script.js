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








    localStorage.setItem("8","hello brother");
    localStorage.setItem("9","hello broth");
    localStorage.setItem("arr_bag","dfghjkl");
    localStorage.removeItem("8");
    let a= localStorage.getItem("arr_bag");
    console.log(a);





    let btn =document.querySelector("#btn");
    btn.addEventListener("click",()=>{
        let a=document.querySelector("#name");
        let b=document.querySelector(".password");
        let c=document.querySelector(".number");
        console.log(a,b,c);

            localStorage.setItem('1',JSON.stringify(a.value));
            localStorage.setItem('2',JSON.stringify(b.value));
            localStorage.setItem('3',JSON.stringify(c.value))
        
    })