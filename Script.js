document.addEventListener("DOMContentLoaded", () => {
    const gifElement = document.getElementById("gifElement");
    const HeartStart = "./Animations/HeartStart.gif";
    const HeartBeat = "./Animations/HeartBeat.gif";
    const HeartStatic = "./Animations/HeartStatic.png";

    let animationPlaying = false;

    gifElement.addEventListener("mouseenter", () => {
        if (animationPlaying) return; // Prevent restarting animation on re-hover
        animationPlaying = true;
        
        gifElement.style.backgroundImage = `url(${HeartStart})`;

        setTimeout(() => {
            gifElement.style.backgroundImage = `url(${HeartBeat})`;
        }, 250); // Adjust this to match HeartStart.gif's duration
    });

    gifElement.addEventListener("mouseleave", () => {
        gifElement.style.backgroundImage = `url(${HeartStatic})`;
        animationPlaying = false;
    });
});


