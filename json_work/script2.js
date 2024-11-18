async function fet(){
    let a =await fetch("https://jsonplaceholder.typicode.com/comments")
    let b= await a.json();
    console.log(b);
    let ans =b.map((obj)=> `
        <h1>${obj.email}</h1>
        <h1>${obj.id}</h1>
        `
    ).join(" ");
    document.querySelector("#conatiner").innerHTML=ans;
}
fet();