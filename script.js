const startButton = document.getElementById("startButton");
const heartRateDisplay = document.getElementById("heartRateDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let intervalId = null; // Variable to store interval ID

// Start measurement on button press
startButton.addEventListener("mousedown", function() {
    if (intervalId === null) { // Check if measurement is not already running
        startMeasurement();
    }
});

// Stop measurement on button release or when the mouse leaves the button
startButton.addEventListener("mouseup", stopMeasurement);
startButton.addEventListener("mouseleave", stopMeasurement);

function startMeasurement() {
    intervalId = setInterval(function() {
        // Generate a random heart rate between 60 and 120 BPM
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
    intervalId = null; // Reset interval ID to allow a new measurement to start when the button is pressed again
}
