//use strict
// "use strict";

// // opa = "teste";
// const opa = "teste";

// // const undefined = 19;

// // delete [].length;

// //console.log

// let a =1;
// let b =2;
// if (a==1){
//     a = b + 2;
// }

// console.log(a);

// for(let i = 0; i < b; i++){
//     a = a + 2;
//     console.log(a);
// }


// if (a > 5){
//     a = 25;
// }

// console.log(a);

// //utilizando o debugger
// let c = 1
// let d = 2

// if (c ==1){
//     c = d + 2;
// }

// //debugger;

// for (let i =0; i , d; i++){
//     c = c + 2;
// }

// console.log("executou o loop")

// debugger;

// if (c > 5){
//     c = 25;
// }

//tratamento de dados
function checkNumber(n){

    const result = Number(n)
    if(Number.isNaN(result)){
        console.log("valor incorreto!");
        return;
    }
    console.log("valor correto!");
    return result;

}
checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("oi");

//exceptions
let x =10;

if (x!= 11){
//     throw new Error("o valor de x não pode ser diferente de 11!");
 }

//try Catch
try {
    const soma = x + y;
}catch(error){
    console.log(`Erro no programa: ${error}`)
}

//finally
try{
    const value = checkNumber("1");

    if(!value){
        throw new Error("valores invalidos");
    }
}catch(error){
    console.log(`opa, ocorreu um erro: ${error}`);
}finally{
    console.log("o codigo foi executado");
}

//assertions
function checkArray(arr){
    if(arr.length === 0){
        throw new Error("o array precisa ter elementos");
    }else{
        console.log(`o array tem ${arr.length} elementos`);
    }
}
// checkArray([]);
 checkArray([1]);