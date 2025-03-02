document.addEventListener('DOMContentLoaded', () => {
    const myGameHeader = document.getElementById('myGameHeader');
    const myGameParagraph = document.getElementById('myGameParagraph');
    const myGameButton = document.getElementById('myGameButton');

    if (myGameButton) {
        myGameButton.addEventListener('click', () => {
            if (myGameHeader && myGameParagraph) {
                myGameHeader.innerHTML = 'Mortal Combat';
                myGameParagraph.innerHTML = 'I like Mortal Combat.';
                myGameHeader.style.color = 'lightblue';
                myGameHeader.style.backgroundColor = 'navy';
            } else {
                console.error('One or more game elements not found!');
            }
        });
    } else {
        console.error('Button not found!');
    }
});
