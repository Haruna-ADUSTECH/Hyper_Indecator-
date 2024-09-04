const startButton = document.getElementById("startButton");
const heartRateDisplay = document.getElementById("heartRateDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let measuring = false;
let intervalId;

// Start measurement on button press
startButton.addEventListener("mousedown", function() {
    if (!measuring) {
        measuring = true;
        startMeasurement();
    }
});

// Stop measurement on button release or when the mouse leaves the button
startButton.addEventListener("mouseup", stopMeasurement);
startButton.addEventListener("mouseleave", stopMeasurement);

function startMeasurement() {
    intervalId = setInterval(function() {
        if (measuring) {
            // Simulate a random heart rate between 60 and 120 BPM
            const heartRate = Math.floor(Math.random() * (120 - 60 + 1) + 60);
            heartRateDisplay.innerText = "Heart Rate: " + heartRate + " BPM";

            // Determine heart rate category
            let result = "";
            if (heartRate < 60) {
                result = "Your heart rate is below normal. Please consult a doctor.";
            } else if (heartRate >= 60 && heartRate <= 100) {
                result = "Your heart rate is normal.";
            } else {
                result = "Your heart rate is high. Please consult a doctor.";
            }
            resultDisplay.innerText = result;
        }
    }, 1000); // Update every second
}

function stopMeasurement() {
    measuring = false;
    clearInterval(intervalId);
}
