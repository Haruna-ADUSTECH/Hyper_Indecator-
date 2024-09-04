const startButton = document.getElementById("startButton");
const heartRateDisplay = document.getElementById("heartRateDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let intervalId; // Declare the interval ID variable outside to allow both start and stop functions to access it

// Start measurement on button press
startButton.addEventListener("mousedown", function() {
    // Start measuring only if the interval is not already running
    if (!intervalId) {
        startMeasurement();
    }
});

// Stop measurement on button release or when the mouse leaves the button
startButton.addEventListener("mouseup", stopMeasurement);
startButton.addEventListener("mouseleave", stopMeasurement);

function startMeasurement() {
    intervalId = setInterval(function() {
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
        // Display the result
        resultDisplay.innerText = result;
    }, 1000); // Update every second
}

function stopMeasurement() {
    clearInterval(intervalId); // Clear the interval to stop the measurement
    intervalId = null; // Reset the interval ID to allow new measurement to start when the button is pressed again
}
