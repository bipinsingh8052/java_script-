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