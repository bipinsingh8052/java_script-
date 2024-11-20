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