let waterUsage = 1000;
let flowRate = 10;

function updateDashboard() {

    waterUsage = Math.floor(Math.random() * 1000) + 1000;
    flowRate = (Math.random() * 15 + 5).toFixed(1);

    document.getElementById("waterUsage").textContent =
        waterUsage + " L";

    document.getElementById("flowRate").textContent =
        flowRate + " L/min";

    document.getElementById("leakStatus").textContent =
        "SAFE";

    document.getElementById("valveStatus").textContent =
        "OPEN";

    document.getElementById("systemStatus").textContent =
        "System is running";
}

updateDashboard();

setInterval(updateDashboard, 2000);
