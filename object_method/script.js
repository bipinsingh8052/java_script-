console.log("hello");
let cart_info=[

    {
    "id":1,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
    "pname":"nike",
    "bname":"shoes",
    "price":"₹245",
    },

    {
        "id":1,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
        "pname":"nike",
        "bname":"shoes",
        "price":"₹245",
        },
        {
            "id":1,
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
            "pname":"nike",
            "bname":"shoes",
            "price":"₹245",
    
        },    
        {
            "id":1,
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
            "pname":"nike",
            "bname":"shoes",
          "price":"₹245",
            }, {
                "id":1,
                "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                "pname":"nike",
                "bname":"shoes",
               "price":"₹245",
                }, {
                    "id":1,
                    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                    "pname":"nike",
                    "bname":"shoes",
                    "price":"₹245",
                    }, {
                        "id":1,
                        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                        "pname":"nike",
                        "bname":"shoes",
                        "price":"₹245",
                        }, {
                            "id":1,
                            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                            "pname":"nike",
                            "bname":"shoes",
                            "price":"₹245",
                            }, {
                                "id":1,
                                "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                                "pname":"nike",
                                "bname":"shoes",
                               "price":"₹245",
                                }, {
                                    "id":1,
                                    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                                    "pname":"nike",
                                    "bname":"shoes",
                                    "price":"₹245",
                                    }, {
                                        "id":1,
                                        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                                        "pname":"nike",
                                        "bname":"shoes",
                                       "price":"₹245",
                                        }, {
                                            "id":1,
                                            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s",
                                            "pname":"nike",
                                            "bname":"shoes",
                                           "price":"₹245",
                                            },

]
let nu =document.querySelector(".cart");
nu.innerHTML= cart_info.map((cart)=>
`<div class="conatiner">
            <div class="heading">
                <img src='${cart.image}
                ' alt="">
            </div>
            <div class="body">
              <p>${cart.bname}</p>
              <h5>${cart.pname}</h5>
              
            </div>
            <div class="footer">
                
                <p>
                    ${cart.price}
                </p>
            </div>
        </div>
`
).join(" ");

console.log()
nbb=98; 

let btn =document.querySelector(".loading button");
let img =document.querySelector(".loading img");
let img_array=[

]
console.log(btn ,img);
btn.addEventListener("click",()=>{
    let index=math.floor(math.random()*img_array.length);
})




// destructuring object and array
// destrucuring  means when you array and object  store a value in variable is called a function
let obj ={
    'a':"iyreeelo",
    'b':"name",
    90:9087567890,
    7:[689,700,76980]
}
let 
number=obj.b;
console.log(number);
let array =[9,8,8,8,8,8];
let index=array[1];
console.log(index);
// what is method and function
// when you declare any function inside the object in the function is called a method 
// when you declare any function outside the object and as anormal function is called a function




// function 
// four type is function
// 1.normal function
// 2.arrow function
// 3.IIFE(imedialty invoked function expression)

(function(){
    // body you write a statment
})();

let  arr=(){

}
