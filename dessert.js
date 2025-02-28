function dessertChanger() {
  const myDessertHeader = document.getElementById("myDessertHeader");
  const myDessertParagraph = document.getElementById("myDessertParagraph");

  if (myDessertHeader && myDessertParagraph) {
      myDessertHeader.textContent = "Ice Cream";
      myDessertParagraph.textContent = "I like ice cream.";
  } else {
      console.error("One or more dessert elements not found!");
  }
}

c