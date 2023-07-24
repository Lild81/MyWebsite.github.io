/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/InizioHealth.png") {
    myImage.setAttribute("src", "images/AshfieldMedcomms2.png");
  } else {
    myImage.setAttribute("src", "images/InizioHealth.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name: ");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName}!`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hi ${storedName}!`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  