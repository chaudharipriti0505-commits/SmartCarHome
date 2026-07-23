
const gasBtn = document.getElementById("gasBtn");
const homeBtn = document.getElementById("homeBtn");
const tempSlider = document.getElementById("tempSlider");
const tempValue = document.getElementById("tempValue");
const risk = document.getElementById("risk");
const alertMsg = document.getElementById("alertMsg");
const time = document.getElementById("time");

let gasOn = false;
let home = true;

// Request Notification Permission
if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
}

// Live Clock
function updateClock() {
    const now = new Date();

    time.innerHTML = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

setInterval(updateClock, 1000);
updateClock();


// Gas Button
gasBtn.addEventListener("click",()=>{

    gasOn=!gasOn;

    gasBtn.innerHTML = gasOn ? "ON" : "OFF";

    gasBtn.style.background = gasOn ? "#22c55e" : "#2563eb";

    fetch("updateDevice.php",{

        method:"POST",

        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },

        body:"device_id=1&status="+(gasOn?"ON":"OFF")

    });

    checkStatus();

});

//homebtn

homeBtn.addEventListener("click",()=>{

    home=!home;

    homeBtn.innerHTML = home ? "Someone Home" : "Nobody Home";

    fetch("updateDevice.php",{

        method:"POST",

        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },

        body:"device_id=2&status="+(home?"HOME":"AWAY")

    });

    checkStatus();

});


// Temperature Slider
tempSlider.addEventListener("input",()=>{

    tempValue.innerHTML=tempSlider.value+"°C";

    fetch("updateDevice.php",{

        method:"POST",

        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },

        body:"device_id=3&status="+tempSlider.value+"°C"

    });

    checkStatus();

});


// Main Logic
function checkStatus() {

    let temp = parseInt(tempSlider.value);

    // SAFE
    if (!gasOn) {

        risk.innerHTML = "SAFE";
        risk.style.color = "#22c55e";

        alertMsg.innerHTML = "✅ Gas is OFF. Everything is safe.";

    }

    // LOW
    else if (gasOn && temp < 50) {

        risk.innerHTML = "LOW";
        risk.style.color = "#38bdf8";

        alertMsg.innerHTML =
        "ℹ️ Gas is ON. Temperature is normal.";

    }

    // WARNING
    else if (gasOn && temp >= 50 && temp < 70) {

        risk.innerHTML = "WARNING";
        risk.style.color = "#facc15";

        alertMsg.innerHTML =
        "⚠ Temperature is increasing. Please check the stove.";

    }

    // DANGER
    else if (gasOn && temp >= 70 && !home) {

        risk.innerHTML = "DANGER";
        risk.style.color = "#ef4444";

        alertMsg.innerHTML =
        "🚨 Gas is ON, nobody is home and temperature is HIGH!";

        if ("Notification" in window &&
            Notification.permission === "granted") {

            new Notification("🚨 Smart Gas Alert", {

                body: "Gas is ON while nobody is home."

            });

        }

    }

    else {

        risk.innerHTML = "HIGH";
        risk.style.color = "#fb923c";

        alertMsg.innerHTML =
        "🔥 High temperature detected. Someone is at home.";

    }

}

// Initial Status
checkStatus();