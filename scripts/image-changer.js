const myImage=document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "vaporwave-anime-girls-philosophy-stoicism-nihilism-hd-wallpaper-6960488d013a1d9bd6d7f80f0091761d.jpg") {
        myImage.setAttribute("src", "Profilepic.png");
    }
    else {
        myImage.setAttribute("src", "vaporwave-anime-girls-philosophy-stoicism-nihilism-hd-wallpaper-6960488d013a1d9bd6d7f80f0091761d.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (!myName)
  {
        setUserName();
  }
  else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is a work of art, right ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `This is a work of art, right ${storedName}?`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

