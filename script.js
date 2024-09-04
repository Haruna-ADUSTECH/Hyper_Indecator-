document.getElementById('startButton').addEventListener('click', function() {
    // Simulate heart rate measurement
    let heartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random heart rate between 60 and 100 bpm
    document.getElementById('heartRate').innerText = `Heart Rate: ${heartRate} bpm`;

    // Compare heart rate to normal blood pressure ranges
    let bpResult = '';
    if (heartRate < 60) {
        bpResult = 'Low Blood Pressure';
    } else if (heartRate >= 60 && heartRate <= 100) {
        bpResult = 'Normal Blood Pressure';
    } else {
        bpResult = 'High Blood Pressure';
    }
    document.getElementById('bpResult').innerText = `Blood Pressure: ${bpResult}`;
});
