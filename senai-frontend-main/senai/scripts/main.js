/*const myHeading = document.querySelector("h1")
myHeading.textContent = "Olá mundo!";

document.querySelector("button").addEventListener("click",function (){
    alert("Você clicou aqui")
})

/*const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/logo-senai.jpg") {
        myImage.setAttribute("src", "images/logo-senai2.png");
    } else {
        myImage.setAttribute("src", "images/logo-senai.jpg");
    }
}*/

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `FAÇA SEU PEDIDO, ${myName}`;

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `FAÇA O SEU PEDIDO, ${storedName}`;
    }
}

myButton.onclick = () => {
    setUserName();
}