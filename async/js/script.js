// //settimeout
// console.log("ainda não executou");

// setTimeout(function(){

//     console.log("requisição assincrona");
// }, 2000)

// console.log("ainda nao executou 2");

// //setInterval
// console.log("ainda nao começou");

// setInterval(function(){
//     console.log("intervalo assincrono");
// },3000);

// console.log("ainda nao começou");

// //Promises
// const promessa = Promise.resolve(5 + 5);
// console.log("algum código");
// promessa.then(value => {
//     console.log(`a soma é ${value}`);
//     return value;
// })
// .then((value) => value - 1)
// .then((value) => console.log(`agora é ${value}`));
// console.log("outro código");

// //tratamento de erro em promises
// Promise.resolve(4 * "asd")
// .then((n) => {
//     if(Number.isNaN(n)){
//         throw new Error ("valor invalido");
//     }
// })
// .catch((err) => console.log(` um erro ocorreu ${err}`));

//rejeitando Promises
function checkNumber (n){
    return new Promise((resolve, reject) => {
        if (n > 10){
            resolve(`o numero é maior que 10`);
        }else{
            reject(new Error("número muito baixo"));
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`o resulyado é ${v}`)).catch((err) =>
 console.log(`um erro ocorreu ${err}`));
b.then((v) => console.log(`o resulyado é ${v}`)).catch((err) =>
    console.log(`um erro ocorreu ${err}`));

//resolvendo varias promises
const p1 = new Promise((resolve, reject)=> {
    setTimeout(function(){
        resolve(10);
    },3000)
});
    
const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10){
        resolve(30);
    }else{
        reject("erro");
    }
});

Promise.all([p1, p2,p3]).then((values) => console.log(values));

//async functions

async function somarComDelay (a, b){
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`o valor da soma é ${value}`);
});

console.log("teste async");

//await
function resolveComDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolveu a promise");
        } , 2000);
    });
}

async function chamadAsync(){
    console.log("chamando a promise e seperando resultado");
    const result = await resolveComDelay();
    console.log(`o resulyado é ${result}`);
}

chamadAsync();

//generators
function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
