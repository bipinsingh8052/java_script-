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
// console.log(a.length);
