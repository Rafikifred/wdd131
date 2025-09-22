// place.js

// ✅ Display current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Display last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// ✅ Windchill calculation
function calculateWindChill(tempC, windKmh) {
  // Formula uses Celsius & km/h → one line return
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
}

// Static values from your HTML
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

// ✅ Conditions for valid wind chill
if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("windchill").textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  document.getElementById("windchill").textContent = "N/A";
}
