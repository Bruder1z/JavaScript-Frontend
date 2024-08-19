//1- var, let e const
var x= 10;
var y = 15;

if(y>10){
    var x = 5
    console.log(x);
}

console.log(x);
let a = 10;
let b =15;

if(b>15)
{
    let a = 5;
    console.log(a);
}
console.log(a);

function logName(){
    const name = "Manu";
    console.log(name);
}

const name = "matheus";
logName(name);

//arrow function
const sum = function(a, b){
    return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5,5));
console.log(arrowSum(5,5));

const greeting =(name) =>{
    if(name){
        return `Hello ${name}!`;
    }else{
        return "hello";
    }
}
console.log(greeting("Luccas"));
console.log(greeting());

const user = {
    name: "davi",
    sayUserName(){
        setTimeout(function(){
                console.log(this);
                console.log(`usernam: ${this.name}`);
        }, 1000);
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`);
        },2000)
    }
}

user.sayUserNameArrow();
user.sayUserName();

//filterudemy
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) =>{
    if(n>=3){
        return n;
    }
})

console.log(highNumbers);

const users = [
    {name:"lucas", avaliable: true},
    {name:"joao", avaliable: false},
    {name:"manu", avaliable: true},
    {name:"luiza", avaliable: true},
    {name:"jyd", avaliable: false}

]

const avaliableUsers = users.filter((user) => user.avaliable)

console.log(avaliableUsers);

//map
const products = [
    {name:"camisa", price:99.99, category:"roupa"},
    {name:"casaco", price:999.99, category:"roupa"},
    {name:"shorts", price:459.99, category:"roupa"},
    {name:"tenis", price:1599.99, category:"calçadp"}
    
]

products.map((product) => {
    if(product.category == "roupa"){
        product.onSale = true
    }
})

console.log(products);

//template literals
const userName = "davi";
const age = 8;

console.log(`o Nome do usuario é ${userName} e ele tem ${age} anos `);

//destructuring

const fruits = ["maça", "banana", "laranja"];

const [f1, f2, f3]= fruits
console.log(f1, f3);

const productDetails = {
    name1:"Mouse",
    price: 50,
    category:"periferico",
    color:"black"
}

const {name1, price, category, color}=productDetails;

console.log(`O nome do produto é ${name1}, ele custa apenas R$
    ${price} na cor ${color} e sua categoria esta na ${category}`);

    //spread operator

    const a1 = [1, 2, 3];
    const a2 = [4, 5, 6];

    const a3 = [...a1, ...a2];
    console.log(a3);

    const a4 = [0, ...a3, 7];

    console.log(a4);

    const carName = {nameCar:"fastback"};
    const carBrand = {brand:"FIAT"};
    const otherInfos = {tipo:"turbo", pric:1500000 };
    const fastback = [...carBrand, ...carName, otherInfos];

    //CLASSES
    class Product{
        constructor(name, price){
            this.name = name;
            this.price = price;
        }

        productWithDiscount(discount){
            return this.price *((100-discount)/100)
        }
    }

    const shirt = new Product ("Camisa Bape", 1500);
    console.log(shirt);
    console.log(shirt.productWithDiscount(20));
    console.log(shirt.productWithDiscount(50));

    //herança
    class ProductWithAttributes extends Product{
        constructor(name, price, colors){
            super(name, price);
            this.colors = colors
        }

        showColors(){
            console.log("as cores são: ");
            this.colors.forEach((color) => {
                console.log(this.color);
            });
        }
    }

    const hat = new ProductWithAttributes("boné", 100, ["purple","blue"]);
    console.log(hat);
    console.log(hat.name);

    console.log(showColors);
    hat.showColors();