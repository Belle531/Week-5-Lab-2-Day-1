document.getElementById("Aboutus").addEventListener("click", function() {
    createConfetti();
    window.open("about.html", "_blank");
});

function createConfetti() {
    const container = document.getElementById("confetti-container");
    const colors = ["#f06", "#ff0", "#0f0", "#0ff", "#f0f"];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(confetti);
    }

    setTimeout(() => {
        container.innerHTML = "";
    }, 5000);
}