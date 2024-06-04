let Start_btn = document.getElementById('start_btn');

function Start_to_End() {
    let Start_btn = document.getElementById('start_btn');

    if (Start_btn.innerText === "Start") {
        Start_btn.innerText = "Reset";
        // Add the scroll-animation class to start scrolling
        document.getElementById('display_box').classList.add('scroll-animation');
    } else {
        Start_btn.innerText = "Start";
        // Remove the scroll-animation class to stop scrolling
        document.getElementById('display_box').classList.remove('scroll-animation');
        // call reset all function
        resetAll();
    }
}
function updateLEDText_to_Box(value) {
    const DisplayText = document.querySelector('.display_box');
    DisplayText.textContent = value;
}

function updateTextColor() {
    var displayText = document.querySelector('.display_box');
    var textColorPicker = document.getElementById('text-color-picker');
    displayText.style.color = textColorPicker.value;
}

function updateBackgroundColor() {
    var displayBox = document.querySelector('.box');
    var bgColorPicker = document.getElementById('bg-color-picker');
    displayBox.style.backgroundColor = bgColorPicker.value;
}

// Add event listeners to the color pickers
document.getElementById('text-color-picker').addEventListener('input', updateTextColor);
document.getElementById('bg-color-picker').addEventListener('input', updateBackgroundColor);
Start_btn.addEventListener('click', Start_to_End);


document.addEventListener('DOMContentLoaded', function () {
    // Function to start the rain animation
    function startRain() {
        const displayBox = document.getElementById('box');
        for (let i = 0; i < 20; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'rain';
            displayBox.appendChild(raindrop);
        }
    }
    function stopRain() {
const displayBox = document.getElementById('box');
const raindrops = displayBox.querySelectorAll('.rain');
raindrops.forEach(raindrop => displayBox.removeChild(raindrop));
}

// Add keyboard event listener for left and right arrow keys
document.addEventListener('keydown', function (event) {
if (event.key === 'ArrowRight') {
startRain();
}
if (event.key === 'ArrowLeft') {
stopRain();
}
});


});

document.addEventListener('DOMContentLoaded', () => {
const box = document.getElementById('box');

box.addEventListener('dblclick', () => {
        if (!document.fullscreenElement) {
            if (box.requestFullscreen) {
                box.requestFullscreen();
            } else if (box.mozRequestFullScreen) {
                box.mozRequestFullScreen();
            } else if (box.webkitRequestFullscreen) {
                box.webkitRequestFullscreen();
            } else if (box.msRequestFullscreen) {
                box.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            startRain();
        }
        if (event.key === 'ArrowLeft') {
            stopRain();
        }
    });

    function startRain() {
        for (let i = 0; i < 20; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'rain';
            box.appendChild(raindrop);
        }
    }

    function stopRain() {
        const raindrops = box.querySelectorAll('.rain');
        raindrops.forEach(raindrop => box.removeChild(raindrop));
    }
});
function resetAll() {
    // Reset text input
    document.getElementById('Text_input').value = '';
    updateLEDText_to_Box('');

    // Reset color pickers
    document.getElementById('text-color-picker').value = '#000000'; // Default to black
    document.getElementById('bg-color-picker').value = '#FFFFFF'; // Default to white
    updateTextColor();
    updateBackgroundColor();

    // Reset font selection
    const fontTrigger = document.querySelector('.custom-select-trigger');
    fontTrigger.innerText = 'Select Font';
    changeFont(''); // Assuming default font

    // Reset font size
    document.getElementById('range').value = 50; // Assuming default size

    // Remove any rain elements
    stopRain();
    updateLEDText_to_Box('');
        document.getElementById('display_box').style.fontFamily = '';
        document.getElementById('text-color-picker').value = '#ffffff';
        document.getElementById('bg-color-picker').value = '#000000';
        updateTextColor();
        updateBackgroundColor();
        resetSpeed();
        resetSizeText();
        ChooseAnimation('scroll');
        stopRain();
}
let defaultSpeed = 5;
let defaultSize = 20;
function SetSpeed(speed) {
    const displayText = document.getElementById('display_box');
    displayText.style.animationDuration = `${11 - speed}s`; // Adjust speed based on range input
    const speedIndicator = document.getElementById('speed-indicator');
    if (speed < 5) {
        speedIndicator.textContent = "Speed: Slow";
    } else if (speed > 5) {
        speedIndicator.textContent = "Speed: Fast";
    } else {
        speedIndicator.textContent = "Speed: Medium";
    }
}

function resetSpeed() {
    document.getElementById('range-speed').value = defaultSpeed;
    SetSpeed(defaultSpeed);
}
document.getElementById('range-speed').addEventListener('input', function(event) {
    SetSpeed(event.target.value);
});

function SetSizeText(size) {
    const displayText = document.getElementById('display_box');
    displayText.style.fontSize = `${size}px`;
}

function resetSizeText() {
    document.getElementById('range-size').value = defaultSize;
    SetSizeText(defaultSize);
}
document.getElementById('range-size').addEventListener('input', function(event) {
    SetSizeText(event.target.value);
});