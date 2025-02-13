function revealLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block"; // Show the letter content
    setTimeout(() => letter.classList.add("show"), 10); // Trigger fade-in after display
    const introText = document.getElementById("intro");
    introText.style.display="none";
    // Hide all other text elements except the letter
    const textElements = document.querySelectorAll("div.envelope");
    textElements.forEach(el => {
        if (el !== letter) {
            el.style.display = "none"; // Hide elements that are not the letter
        }
    });

    // Create confetti
    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => confetti.remove(), 2000);
    }
}
