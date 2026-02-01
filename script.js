const hotels = [
  {
    name: "هتل درویشی",
    city: "مشهد",
    type: "هتل",
    stars: 5,
    price: "3,500,000",
    image: "https://picsum.photos/400/300?1",
    services: "استخر، پارکینگ، صبحانه"
  },
  {
    name: "هتل آپارتمان گل",
    city: "تهران",
    type: "هتل آپارتمان",
    stars: 3,
    price: "1,200,000",
    image: "https://picsum.photos/400/300?2",
    services: "آشپزخانه، اینترنت"
  }
];

function search() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const type = document.getElementById("type").value;
  const stars = document.getElementById("stars").value;

  const results = document.getElementById("results");
  results.innerHTML = "";

  hotels
    .filter(h =>
      (!name || h.name.includes(name)) &&
      (!city || h.city.includes(city)) &&
      (!type || h.type === type) &&
      (!stars || h.stars == stars)
    )
    .forEach(h => {
      results.innerHTML += `
        <div class="card">
          <img src="${h.image}">
          <div class="card-body">
            <h3>${h.name}</h3>
            <p>${h.city} | ${h.stars} ⭐</p>
            <p class="price">${h.price} تومان</p>
            <p>${h.services}</p>
          </div>
        </div>
      `;
    });
}

// نمایش اولیه
search();
