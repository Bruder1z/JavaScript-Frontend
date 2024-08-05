//1 movendo-se pelo dom
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);


console.log(document.body.childNodes[1].childNodes[1].textContent);

//2 selecionando elementos por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

//3 selecionando elementos pelo id
const title = document.getElementById("title");

console.log(title);

//4 encontrando elementnos por classe
const products = document.getElementsByClassName("product");
console.log(products);

//5 selecionando elementos por regras de css
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const MainContainer = document.querySelector("#main-container");
console.log(MainContainer);

//6 insert before
//cria um elemento antes de outro elemnto
const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title);
console.log(header);

//7 append child
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

//8 metodo replace child
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título";
header.replaceChild(h2, title);

//9 criando nós de texto
const myText = document.createTextNode("agora vamos colocar mais um titulo");
console.log(myText);
const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);
MainContainer.appendChild(h3);

//10 trabalhando com atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.coom");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "blank");

//11 altura e largura dos elementos
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

//12 posição do elemnto da tela
const product1 = products[0]

console.log(product1.getBoundingClientRect());

//13 estilos com JS
MainContainer.style.color = "red";
MainContainer.style.backgroundColor = "#333";
MainContainer.style.paddingBottom = "15px";

//14 html collection
for(const li of listItens){
    li.style.backgroundColor = "red";
}



