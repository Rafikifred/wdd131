// place.js

// Footer: current year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
function calculateWindChill(tempC, windKmh) {
  // Convert Celsius to Fahrenheit and km/h to mph
  let tempF = (tempC * 9) / 5 + 32;
  let windMph = windKmh / 1.609;

  // Apply formula if valid
  if (tempF <= 50 && windMph > 3) {
    let windChillF =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(windMph, 0.16) +
      0.4275 * tempF * Math.pow(windMph, 0.16);

    // Convert back to Celsius (rounded)
    return Math.round(((windChillF - 32) * 5) / 9);
  } else {
    return "N/A";
  }
}

// Get values from HTML
const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Calculate and display
document.getElementById("windchill").textContent = calculateWindChill(temp, wind);
