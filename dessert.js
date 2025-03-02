document.addEventListener('DOMContentLoaded', () => {
  const myIceCreamButton = document.getElementById('myIceCreamButton');

  if (myIceCreamButton) {
      myIceCreamButton.addEventListener('click', () => {
          const myDessertHeader = document.getElementById('myDessertHeader');
          const myDessertParagraph = document.getElementById('myDessertParagraph');

          if (myDessertHeader && myDessertParagraph) {
              myDessertHeader.textContent = 'Ice Cream';
              myDessertParagraph.textContent = 'I like ice cream.';
          } else {
              console.error('One or more dessert elements not found!');
          }
      });
  } else {
      console.error('Button not found!');
  }
});
