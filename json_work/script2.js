// async function fet(){
//     let a =await fetch("https://jsonplaceholder.typicode.com/comments")
//     let b= await a.json();
//     console.log(b);
//     let ans =b.map((obj)=> `
//         <h1>${obj.email}</h1>
//         <h1>${obj.id}</h1>
//         `
//     ).join(" ");
//     document.querySelector("#conatiner").innerHTML=ans;
// }
// fet();


async function run(){
    let a= await fetch ("http://localhost:3000/STUDENT");
    let b= await a.json();
    let c= b.map((v)=>{
        return `
        <h1>${v.id}</h1>
        <h2>${v.name}</h2>
        <h2>${v.age}</h2>
        <h2>${v.address}</h2>`
    }).join(" ");
    document.querySelector(".card").innerHTML=c;
}
run();




