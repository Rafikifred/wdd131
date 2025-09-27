// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/accra-ghana-temple.jpeg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/nauvoo-temple.jpeg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/paris-france-temple.jpeg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/roma-italy-temple.jpeg"
  }
  // ➕ Add at least 6 more temples to meet the 10 minimum
];

// Function to create and display temple cards
function displayTemples(filteredTemples) {
  const container = document.querySelector(".temple-container");
  container.innerHTML = ""; // Clear before rendering new set

  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${temple.dedicated}</p>
      <p><span>Size:</span> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Initial load (Home = all temples)
displayTemples(temples);

// Filters
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)));
document.querySelector("#new").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)));
document.querySelector("#large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
document.querySelector("#small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

// Footer year + last modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
