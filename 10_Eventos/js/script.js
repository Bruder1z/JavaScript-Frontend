const btn = document.querySelector("#my-button");
btn.addEventListener("click", function(){
    console.log("clicou aqui!!!")
});

//2 removvendoe vento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("teste")
};
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () =>{
    console.log("evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem);
});

//3 argumento do evento
const myTitle = document.querySelector("#my-title");
myTitle.addEventListener("click", (event) =>{

    console.log(event);
    console.log(event.srcElement);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

//4 propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("div-btn");

containerBtn.addEventListener("click", () => {
    console.log("evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("evento 2");
});

//5 default
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("não alterou a página");
});

//6 eventos de tecla
document.addEventListener("keydown", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
})

//7 eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("pressionou botão");
});
mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou botão");
});
mouseEvents.addEventListener("dblclick", () => {
    console.log("duplo click");
})

//8 movimentação do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`no eixo x ${e.x}`);
    console.log(`no eixo y ${e.y}`)
});

//9 eventos por scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("passamos de 200px");
    } 
} );

//10 focus;
const input = document.querySelector("#my-input");
input.addEventListener("focus", (e) => {
    console.log("entrou no input ");
});

//11 eventos de carregamento de página
window.addEventListener("load", () => {
    console.log("a pagina carregou!");
});

window.addEventListener("beforeunload", (e) => {
e.preventDefault();
e.returnValue = "teste";
});

//12 debounce
//evento disparar menos vezes
const debounce = (f, delay) => {
    let timeout 

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout (() => {
            f.apply(arguments)
        }, delay);
    };
};

window.addEventListener(
    "mousemove",
     debounce( () => {
    console.log("executandoi a cada 400ms");
},400)
);