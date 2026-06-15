// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');

    // Smoothly track mouse movement to shift background glow gradients
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Shift the first glow orb slightly towards the mouse
        if (glow1) {
            glow1.style.transform = `translate(${mouseX * 0.03}px, ${mouseY * 0.03}px)`;
        }

        // Shift the second glow orb in the opposite direction for a dynamic depth effect
        if (glow2) {
            glow2.style.transform = `translate(${mouseX * -0.02}px, ${mouseY * -0.02}px)`;
        }
    });

    // Optional: Add a subtle console log to verify your script is active
    console.log("🌌 Futuristic Glassmorphic Portfolio Active.");
});
