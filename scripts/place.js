// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
function calculateWindChill(t, v) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

if (temp <= 10 && wind > 4.8) {
  document.getElementById("windchill").textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
  document.getElementById("windchill").textContent = "N/A";
}
