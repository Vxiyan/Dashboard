// Notepad functionality: Save text as .txt file
document.getElementById("downloadBtn").addEventListener("click", function() {
    const text = document.getElementById("notepad").value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'notes.txt';
    link.click();
});

// Performance Meters: Track CPU and Memory Usage
function updatePerformanceMeters() {
    // Simulated example: Actual CPU and Memory usage requires system-level access
    // For a more accurate result, you would typically need to use a Node.js environment or Electron

    // Simulating browser load data
    const cpuUsage = Math.random() * 100;
    const memoryUsage = Math.random() * 100;

    // Update the progress bars
    document.getElementById("cpuMeter").value = cpuUsage;
    document.getElementById("memoryMeter").value = memoryUsage;
}

// Update performance every second
setInterval(updatePerformanceMeters, 1000);
