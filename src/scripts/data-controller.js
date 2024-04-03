import datadicoding from "../public/data/DATA.json";

// const responseJson = JSON.parse(datadicoding);
const responseRestaurant = datadicoding.restaurants;
const dataItems = document.querySelector(".menu-items");

console.log(responseRestaurant);
responseRestaurant.map((item) => {
  const dataItem = document.createElement("section");
  dataItem.classList.add("menu-item");
  dataItem.setAttribute("id", item.id);
  dataItem.innerHTML = `
    
    <figure>
        <img
            src="${item.pictureId}"
            alt="${item.alt}"
        />
        <div class="image-caption">
            <figcaption class="item-location">${item.city}</figcaption>
            <figcaption class="item-rating"><span>★ </span>${item.rating}</figcaption>
        </div>
    </figure>
    
    <div class="description">
        <h2 class="item-name">${item.name}</h2>
        <p class="item-description">${item.description}</p>
    </div>
        
    `;

  dataItems.append(dataItem);
});
