function dogsChanger() {
    const myPetHeader = document.getElementById("myPetheader"); 
    const myPetParagraph = document.getElementById("myPetParagraph"); 

    if (myPetHeader && myPetParagraph) { 
        myPetHeader.textContent = "Dogs";
        myPetParagraph.textContent = "I like dogs."; 
    } else {
        console.error("One or more elements not found!"); 
    }
}

const myPetButton = document.getElementById("myPetButton"); 

if (myPetButton) { 
    myPetButton.onclick = dogsChanger;
} else {
    console.error("Button not found!");
}
