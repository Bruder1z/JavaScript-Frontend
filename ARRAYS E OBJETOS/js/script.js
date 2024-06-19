// const lista =[1, 2, 3, 4,5];

// console.log(lista);

// console.log(typeof(lista));

// const itens = ["Matheus", true, 2, 4.12];
// console.log(itens);

// const arr = ["a", "b", "c", "d", "e"];
// console.log(arr[1]);//b
// console.log(arr[4]);//e
// console.log(arr[45]);//undefined

// const numbers = [5,3,4];

// console.log(numbers.length);
// console.log(numbers['length']);

// const myNmae = "Lucas";
// console.log(myNmae.length);

// const otherNumbers = [1, 2, 3];
// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers);

// const txt = "algum texto";

// console.log(txt.toUpperCase());
// console.log(typeof txt.toUpperCase());

// console.log(txt.indexOf("g"));
// console.log(txt.indexOf("f"));//?

// const person = {
//     name: "lucas",
//     age: 19,
//     job: "student"
// };

// console.log(person);
// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// //propriedades
// const car ={
//     engine: 2.0,
//     brand:"vw",
//     model:"nivus",
//     km:20000
// };

// console.log(car);

// car.doors = 4;
// console.log(car);

// delete car.km
// console.log(car);

// //mais sobre objetos
// const obj = {
//     a:"teste",
//     b: true
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c:[]
// };
// Object.assign(obj2, obj);
// console.log(obj2);

// console.log(obj);

// //Conhecendo mais objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// //mutação
// const a ={
//     name:"Manuela Diniz"
// }

// const b =a

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 18;
// console.log(a);
// console.log(b);

// delete b.age

// console.log(a);
// console.log(b);

//loop
// const users = ["Lucas", "manu", "luiza", "davi", "rafael"]
// for (let i = 0; i < users.length; i++){
//     console.log(`Listando o usuario: ${users[i]}`);
// }

//push e pop
// const array = ["a", "b", "c"]

// array.push("d");
// console.log(array);
// console.log(array.length);
// array.pop();
// console.log(array)
// const itemRemovido = array.pop();
// console.log(itemRemovido);
// console.log(array);
// array.push("d","z","x");
// console.log(array);

// //shift e unshift
// const letters = ["a", "b", "c"];
// const letter = letters.shift();
// console.log(letter);
// console.log(letters);
// letters.unshift("p", "x", "l");
// letters.unshift("m");
// console.log(letters);

// //indexOF e lastIndexOf
// const myElements = ["morango", "banana", "maça", "abacate", "abacate", "pera"]
// console.log(myElements.indexOf("banana"));
// console.log(myElements.indexOf("abacate"));
// console.log(myElements[3]);
// console.log(myElements[myElements.indexOf("abacate")]);

// console.log(myElements.lastIndexOf("abacate"));

// console.log(myElements.indexOf("kiwi"));//nao existe e retorna -1
// //igual com last indexOf

//Slice

// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2,4);
// console.log(testeSlice);
// console.log(subArray);

// const subArray2 = testeSlice.slice(2,4 + 1);
// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);
// console.log(subArray3);//lista vazia

// const subArray4 = testeSlice.slice(2);
// console.log(subArray4);

// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
// console.log(`o número é ${numero}`);
// });

// const posts = [
//     {title: "primeiro post",category:"php"},
//     {title: "segundo post",category:"js"},
//     {title: "terceiro post",category:"python"},
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// });

// //includes
// const brands = ["bmw", "vw", "fiat"];
// console.log(brands.includes("fiat"));
// console.log(brands.includes("byd"));

// if(brands.includes("bmw")){
// console.log("há carros de bmw");
// }

// //reverse
// const revrseTest = [1, 2, 3, 4, 5];

// revrseTest.reverse();

// console.log(revrseTest);

// //trim
// const trimTest = "testando \n ";

// console.log(trimTest);
// console.log(trimTest.trim());

// console.log(trimTest.length);
// console.log(trimTest.trim().length);

// //padStart
// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4, "0");

// console.log(testePadStart);

// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0");
// console.log(testePadEnd);

// //split
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);

// //join
// const fraseDenovo = arrayDaFrase.join(" ");
// console.log(fraseDenovo);

// const itensParaComprar = ["mouse","teclado","monitor"]
// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
// console.log(fraseDeCompra);

// //repeat
// const palavra = "testando ";

// console.log(palavra.repeat(5));

// //rest operator

// const somaInfinita = (...args) => {

//     let total = 0

//     for(let i = 0; i < args.length; i++){
//         total += args[i];
//     }
//     return total;
// };

// console.log(somaInfinita(1, 2, 3));

// console.log(somaInfinita (1, 20, 34, 555, 56554, 58747847, 3427584375));

//for of
// const somaInfinita2 = (...args) => {
//     let total = 0

//     for(num of args){
//         total += num;
//     }
//     return total;
// }

// console.log(somaInfinita2(1, 2, 3, 4));

// //destructuring em objetos
// const userDetails = {
//     firstName: "lucas",
//     lastName: "bruder",
//     job:"student"
// }

// const {firstName, lastName, job} = userDetails;

// console.log(firstName, lastName, job);

// //renomear variaveis
// const {firstName:primeiroNome, }= userDetails;
// console.log(firstName);

// //destructuring em arrays
// const myList = ["avião", "submarino", "carro", "trator"];

// const [veivuloA, veiculoB, VeiculoC, veiculoD] = myList;

// console.log(veivuloA, veiculoB, VeiculoC);

//conhecendo JSON
const myJson = '{"name": "lucas", "age": 19, "skills": ["php", "js", "python"]}';

console.log(myJson);  // Output: {"name": "lucas", "age": 19, "skills": ["php", "js", "python"]}
console.log(typeof myJson);  // Output: string

// Conversion to JSON object
const myObject = JSON.parse(myJson);

console.log(myObject);  // Output: { name: "lucas", age: 19, skills: ["php", "js", "python"] }

console.log(myObject.name);  // Output: lucas
console.log(typeof myObject);  // Output: object

//json invalido
// const badJson = '{"name":matheus, "age": 31}';
// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
console.log(typeof myNewJson);