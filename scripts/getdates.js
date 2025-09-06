// scripts/getdates.js

// ✅ Dynamically set the current year
const yearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
if (yearSpan) {
  yearSpan.textContent = currentYear;
}

// ✅ Dynamically set the last modified date
const lastModifiedPara = document.querySelector("#lastModified");
if (lastModifiedPara) {
  lastModifiedPara.textContent = "Last Modified: " + document.lastModified;
}
