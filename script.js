const midText = document.getElementById('mid-text-mid');

document.addEventListener('mousemove', (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const xPercentage = (xPos / windowWidth) * 100;
    const yPercentage = (yPos / windowHeight) * 100;

    const gradient = `radial-gradient(at ${xPercentage}% ${yPercentage}%, #f79d00 0%, rgb(226, 25, 58) 69%)`;

    midText.style.backgroundImage = gradient;
});
