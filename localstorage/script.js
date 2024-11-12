function f(){
    return 9;
}
f();
let a=f();
console.log(a);
let v=(a,b) =>{
    return a+b;
}
console.log(v(9,1));


//  arrow function shortest return 
// 1. ()=> it take argument and return value.
// 2. =>  it not take any argument it only return it .    
// 3. ()=>()



let s =(r)=> 22/7*(r*r);    
console.log(s(4));