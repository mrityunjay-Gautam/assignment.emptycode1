function createCard(data) {
  return `
    <div class="card" data-name="${data.name}" data-projects="${data.projects}" data-shortlisted="${data.shortlisted || false}">
      <h2>${data.name}</h2>
      <div class="stars">${data.rating}</div>
      <p>${data.description}</p>
      <div class="info">
        <div><strong>${data.projects}</strong><br>Projects</div>
        <div><strong>${data.years}</strong><br>Years</div>
        <div><strong>${data.price}</strong><br>Price</div>
      </div>
      <div class="contacts">
        <p>${data.phone1}</p>
        <p>${data.phone2}</p>
      </div>
      <div class="actions">
        <button onclick="alert('Details')"><i class="bi bi-arrow-right"></i> Details</button>
        <button onclick="hideCard(this)"><i class="bi bi-eye-slash"></i> Hide</button>
        <button onclick="toggleShortlist(this)"><i class="bi bi-bookmark"></i> Shortlist</button>
        <button onclick="alert('Calling...')"><i class="bi bi-telephone"></i> Call</button>
        <button onclick="alert('Report')"><i class="bi bi-exclamation-circle"></i> Report</button>
      </div>
    </div>
  `;
}

function renderCards(cards) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = cards.map(createCard).join('');
}

function hideCard(button) {
  const card = button.closest(".card");
  card.remove();
  updateStorage();
}

function toggleShortlist(btn) {
  const card = btn.closest(".card");
  const isShortlisted = card.dataset.shortlisted === "true";
  card.dataset.shortlisted = !isShortlisted;
  btn.innerHTML = isShortlisted ? '<i class="bi bi-bookmark"></i> Shortlist' : '<i class="bi bi-bookmark-check"></i> Shortlisted';
  updateStorage();
}

function sortCards() {
  let cards = getCardsFromStorage();
  cards.sort((a, b) => b.projects - a.projects);
  renderCards(cards);
}

function showShortlisted() {
  let cards = getCardsFromStorage().filter(c => c.shortlisted);
  renderCards(cards);
}

function updateStorage() {
  const cards = Array.from(document.querySelectorAll(".card")).map(card => ({
    name: card.dataset.name,
    rating: card.querySelector(".stars").innerText,
    description: card.querySelector("p").innerText,
    projects: parseInt(card.dataset.projects),
    years: card.querySelector(".info div:nth-child(2) strong").innerText,
    price: card.querySelector(".info div:nth-child(3) strong").innerText,
    phone1: card.querySelector(".contacts p:nth-child(1)").innerText,
    phone2: card.querySelector(".contacts p:nth-child(2)").innerText,
    shortlisted: card.dataset.shortlisted === "true"
  }));
  localStorage.setItem("designers", JSON.stringify(cards));
}

function getCardsFromStorage() {
  return JSON.parse(localStorage.getItem("designers") || "[]");
}

document.getElementById("designerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const newCard = {
    name: this.name.value,
    rating: this.rating.value,
    description: this.description.value,
    projects: parseInt(this.projects.value),
    years: this.years.value,
    price: this.price.value,
    phone1: this.phone1.value,
    phone2: this.phone2.value,
    shortlisted: false
  };
  const existing = getCardsFromStorage();
  existing.push(newCard);
  localStorage.setItem("designers", JSON.stringify(existing));
  renderCards(existing);
  this.reset();
});

window.onload = () => {
  if (!localStorage.getItem("designers")) {
    const initial = [
      {
        name: "Epic Designs",
        rating: "★★★☆☆",
        description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        projects: 57,
        years: 8,
        price: "$$",
        phone1: "+91 - 984532853",
        phone2: "+91 - 984532854",
        shortlisted: false
      },
      {
        name: "Studio - D3",
        rating: "★★★★☆",
        description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        projects: 43,
        years: 6,
        price: "$$$",
        phone1: "+91 - 984532853",
        phone2: "+91 - 984532854",
        shortlisted: false
      }
    ];
    localStorage.setItem("designers", JSON.stringify(initial));
  }
  renderCards(getCardsFromStorage());
};
