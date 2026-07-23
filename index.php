<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Gas Safety Dashboard</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

<div class="overlay"></div>

<div class="dashboard">

    <!-- Header -->
    <header>

        <div>
            <h1>🛡 Gas Safety </h1>
            <p>Kitchen Monitoring System</p>
        </div>

        <div class="clock">
            <i class="fa-solid fa-clock"></i>
            <span id="time">00:00:00</span>
        </div>

    </header>

    <!-- First Row -->

    <div class="grid">

        <div class="card">

            <i class="fa-solid fa-fire-flame-curved icon"></i>

            <h3>Gas Status</h3>

            <button id="gasBtn">OFF</button>

        </div>

        <div class="card">

            <i class="fa-solid fa-house icon"></i>

            <h3>Home Status</h3>

            <button id="homeBtn">Someone Home</button>

        </div>

        <div class="card">

            <i class="fa-solid fa-temperature-three-quarters icon"></i>

            <h3>Temperature</h3>

            <h2 id="tempValue">25°C</h2>

        </div>

    </div>

    <!-- Slider Card -->

    <div class="sliderCard">

        <h3>Temperature Control</h3>

        <input
            type="range"
            min="0"
            max="100"
            value="25"
            id="tempSlider">

    </div>

    <!-- Bottom Row -->

    <div class="bottom">

        <div class="card">

            <i class="fa-solid fa-triangle-exclamation icon"></i>

            <h3>Risk Level</h3>

            <h2 id="risk">SAFE</h2>

        </div>

        <div class="card">

            <i class="fa-solid fa-bell icon"></i>

            <h3>Alert</h3>

            <p id="alertMsg">
                System is operating normally.
            </p>

        </div>

    </div>

</div>

<script src="js/script.js"></script>
</body>
</html>