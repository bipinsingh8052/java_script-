let arra=[9,8,7,7,"7",function(){
    // console.log("h");
    return "hello";
}];
console.log(typeof(arra[1]));
console.log(typeof(arra[5]));
// how to function called;
arra[5]();
console.log(arra[5]());
// let a=[s{
// hel:"hjkoiuy"
// }
// ,{},]

for(let i=0;i<arra.length;i++)
{
    console.log(arra[i]);
}


// work on the index of 
for(let i in arra){
    console.log(arra[i]);
}

// work on the value of
// for(let i of a){
//     console.log(i);
// }


let a=[1,2,3,4,5,6,7,8,8,9,98,8,8888,334,222];
console.log(a.length)
a.pop();
a.push(89);
a.shift();
a.unshift(1);
console.log(a.length);
// add
a.splice(0,1,999,89,567890,67890);
console.log(a);

// deleted
a.splice(0,4);
console.log(a);

// last deted
a.splice(a.length-1,a.length);
console.log(a);
// last add
a.splice(a.length,a.length,7890,6789,56789);
console.log(a);
a.splice(0,4);
console.log(a);

    a.splice(4,0);
    console.log(a);

    // middle deletd
    a.splice(4,1);
    console.log(a);
    // middle add
    a.splice(4,0,9);
    console.log(a);
    a.splice(4,1,98765432);
    console.log(a);
// console.log(a.length);



let b=[1,2,3,4,5,6,7,89,9877];

// sort method
 
console.log(b.sort(function(a,b){return b-a}))
console.log(b.sort(function(a,b){return a-b}))

// reverse method
console.log(b.reverse())

// reduce method
 console.log(b.reduce(function(a,b){return a+b}));

// tostring method
console.log(b.toString());

// join method
console.log(b.join(" "))

// higher order method
// map
// reduce
// number sort 
// find
// filter
// foreach

// map method its create a new array but it take new variable

// 
let img=[
'https://miro.medium.com/v2/resize:fit:1400/1*VwJ4_7-Cqsl7Z_gr0Jo87A.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsKGQepLuOKYPv_nETIHUd06qT5i7JQCi6HMFR4y0VnpFUfUPY3Xs16WqfhhQOx8JgvM&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFj4HJGa0Q523KlusfQQOZTsafmv3k2WC6DgmPuf2LgqANYvrL1ziCYQBSCxSGxLEGGo0&usqp=CAU',
    'https://miro.medium.com/v2/resize:fit:1218/0*6EcaRhwDICCS8Yt5.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dYaPcmxWELY6AIrNjMBknmILxfxKd5RDjipbe6byDDr9ChROSu6i2KAq72ZdT_G6CMs&usqp=CAU'


];
let normal=document.querySelector(".normal");
let button=document.querySelector("button");



    console.log(normal);
// console.log(c.map((i)=>{return i*10}))
// console.log("started method")
function run(){
    normal.innerHTML = img.map((i)=>
        `
        <img style="width:500px;height:400px; border: 2px solid black" src="${i}" alt="image not found" > 

        `
   
    ).join(" ");
    console.log(normal); 
}






let r = "hellow"
r.charAt(3);
console.log(r);
r.charCodeAt(3);
console.log(r);

let n = Math.floor(4.5);
console.log(n);

let m = Math.ceil(4.5);
console.log(m);

let a = Math.PI;
console.log(a);

let b = Math.sqrt();
console.log(b);

let c = Math.sqrt(1/2);
console.log(c);

let d = Math.pow(4,2);
console.log(d);

let e = Math.round(4.5);
console.log(e);

let str = "we are developers";
let len = str.length;
let f = Math.random();
let ans = len*f;
console.log(ans);