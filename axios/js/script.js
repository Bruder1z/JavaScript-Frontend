//INSTALAÇÃO
console.log(axios);

//request
const getData = async() =>{
    try{
                const response = await postFetch.get("https://jsonplaceholder.typicode.com/users", {
                    //headers
                    headers: {
                        "Content-Type":"applications/json",
                        custom: "header",
                    },
                }
 );
    console.log(response);

    return response.data;
    }catch(error){
        console.log(error);
    }
}
getData();

//API
const container = document.querySelector("#uder-container");
const printData = async() =>{
    const data = await getData();

    console.log(data);

data.forEach((user) =>{
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("p");

    emailElement.textContent = user.email;

    div.appendChild(emailElement);

    container.appendChild(div);
})
};
printData();

//headers

const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput= document.querySelector("#body");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        body: {title: titleInput.value, body: bodyInput.value, userId: 1}
    } );
});

//global instance