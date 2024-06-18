// //Criando uma função
// function minhaFuncao(){
//     console.log("testenado")
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function (){
//     console.log("Função em variavel");
// };

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Imprimindo alguma coisa");

// funcaoComParametro("outra função");

// //Return
// const a =10
// const b =20
// const c = 30
// const d =40
// function soma(n1,n2){
//     return n1 + n2;
// }

// const resultado = soma(a,b)

// console.log(resultado)
// console.log(soma(c,d))

// //Escopo da função
// let y =10

// function testenadoEscopo(){
//     let y = 20
//     console.log(`y dentro da função é: ${y}`);
// }

// console.log(`Y fora da função é: ${y}`);
// testenadoEscopo();

// //Escopo aninhado
// let m =10

// function escopoAninhado(){
//     let m = 20

//     if(true){
//         let m = 30
//         if(true){
//             let m = 40

//             console.log(m)
//         }
//         console.log(m)
//     }
//     console.log(m)
// }
// escopoAninhado();
// console.log(m);

// //Arrow funcion
// const testeArrow = () => {
//     console.log("esta é uma arrow function")
// };

// testeArrow();

// const ParOuImpar = (n) =>{
//     if(n % 2 == 0){
//         console.log("par")
//         return
//     }
//     console.log("impar")
// }

// ParOuImpar(5);
// ParOuImpar(10);

// //Mais sobre arrow functions
//  const raizQuadrada =(x) =>{
//     return x * x;
//  }

//  console.log(raizQuadrada(4));

//  const raizQuadrada2 = (x) => x * x;

// console.log(raizQuadrada2(5));
// console.log(raizQuadrada2(12));

// const helloWorld = () => console.log("hello world");

// helloWorld();

// //Parametro opcional
// const multiplication = function(m, n){
//     if (n === undefined){
//         return m * 2;
//     }
//     else{
//         return m*n;
//     }
// }
// console.log(multiplication(5));
// console.log(multiplication(2, 4));

// const greeting = (name) =>{
//     if (!name){
//         console.log("Olá!");
//     }

//     console.log(`ola ${name}`);
// }

// greeting();
// greeting("LUCAS");

//Valor default
const customGreeting = (name, greet = "olá") =>{
    return `${greet}, ${name}`
}
console.log(customGreeting("MANU"));
console.log(customGreeting("LUCAS", "BOA TARDE"));

const repeatText = (text, repeat = 2) =>{
    for(let i =0; i< repeat; i++){
        console.log(text);
    }
};

repeatText("testeando");

repeatText("5", 5);

//closure

function someFunction (){
    let txt = "alguma coisa";

    function display (){
        console.log(txt);
    }
    display();
}

someFunction();

//Mais sobre closure
const multiplicationClosure = (n) =>{
    return (m) => {
        return n*m;
    };
};

const c1=multiplicationClosure(5)
const c2=multiplicationClosure(10)

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

//Recursão
const untilTen = (n , m) =>{
    if(n < 10){
        console.log("A função parou de executar")
    }else{
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen (100, 7);

//infinite recursion
// function run(){
//     console.log("EXECUTANDO...");
//     run();
// }

function factorial(x){
if(x === 0){
    return 1
} else{
    return x * factorial(x-1)
}
}

const num = 6
const result = factorial(num)
console.log(result);