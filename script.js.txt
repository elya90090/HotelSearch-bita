const hotels = [
  {
    name: "هتل پارس",
    city: "مشهد",
    stars: 5,
    price: 2500000,
    type: "hotel",
    services: "استخر، پارکینگ"
  },
  {
    name: "هتل آپارتمان گل",
    city: "تهران",
    stars: 3,
    price: 1200000,
    type: "apartment",
    services: "آشپزخانه"
  }
];

function searchHotels() {
  const list = document.getElementById("hotelList");
  list.innerHTML = "";

  hotels.forEach(hotel => {
    const card = document.createElement("div");
    card.className = "hotel-card";
    card.innerHTML = `
      <h3>${hotel.name}</h3>
      <p>شهر: ${hotel.city}</p>
      <p>ستاره: ${hotel.stars}</p>
      <p>قیمت: ${hotel.price.toLocaleString()} تومان</p>
      <p>خدمات: ${hotel.services}</p>
    `;
    list.appendChild(card);
  });
}
