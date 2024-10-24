async function run() {
    let data =await fetch('http://localhost:4000/product');
    let responise=await data.json();
    console.log(responise);
    let table =document.querySelector("table");
    table.innerHTML=responise.map((item)=>`
    <tr>${item.id}</tr>
<tr>${item.image}</tr>
<tr>${item.pname}</tr>
<tr>${item.price}</tr>
    `)
}