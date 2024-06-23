import CONFIG from '../../globals/config';

const createRestaurantsList = (restaurant) => `
  <section class='menu-item'>
    <figure>
        <img
            class="lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
            alt="Gambar Restoran"
        />
        <div class="image-caption">
            <figcaption class="item-location">${restaurant.city}</figcaption>
            <figcaption class="item-rating"><span>★ </span>${restaurant.rating}</figcaption>
        </div>
    </figure>
    
    <div class="description">
        <h2 class="item-name"><a class="item-name a" href='/#/detail/${restaurant.id}'>${restaurant.name}</a></h2>
        <p class="item-description">${restaurant.description}</p>
    </div>
    </section>
    `;

const createRestaurantDetails = (restaurant) => {
  // Create Menu List
  const createMenuList = (menu) => {
    let menuList = '';
    for (let i = 0; i < menu.length; i += 1) {
      const elementOutput = `<li>${menu[i].name}</li>`;
      menuList += elementOutput;
    }
    return menuList;
  };

  // Create Review List
  const createReviewList = (review) => {
    let reviewList = '';
    for (let i = 0; i < review.length; i += 1) {
      const elementOutput = `
      <ul>
        <li class="review-user">${review[i].name}</li>
        <li class="review-comment"><q>${review[i].review}</q></li>
        <li class="review-date">${review[i].date}</li>
      </ul>
      `;
      reviewList += elementOutput;
    }
    return reviewList;
  };

  const menuList = restaurant.menus;
  const reviewList = restaurant.customerReviews;
  const foodsList = menuList.foods;
  const drinksList = menuList.drinks;
  const foods = createMenuList(foodsList);
  const drinks = createMenuList(drinksList);
  const reviews = createReviewList(reviewList);
  return `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <img src='${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}' alt="Gambar Restoran">
  <div class="details-description">
    <div class="address-detail">
      <p>${restaurant.address}</p>
      <p>${restaurant.city}</p>
    </div>
    
    <p class="restaurant-description">${restaurant.description}</p>
    <div class="menu">
    <h3>Menu : </h3>
      <div class="menu-type">
        <div class="menu-foods">
          <h4>Makanan</h4>
          <ul>
            ${foods}
          </ul>
        </div>
        <div class="menu-drinks">
          <h4>Minuman</h4>
          <ul>
            ${drinks}
          </ul>
        </div>
      </div>
    </div>
    <div class="review">
      <h3>Review Pelanggan </h3>
      <div class="review-list">
        ${reviews}
      </div>
    </div>
  </div> `;
};

const createFavoriteRestaurant = () => `
<button aria-label="unfavorite this restaurant" class="favorite-button" id="unfavorite-button">❤️</button>
`;
const createUnfavoriteRestaurant = () => `
<button aria-label="favorite this restaurant" class="favorite-button" id="favorite-button">🤍</button>
`;

export {
  createRestaurantsList,
  createRestaurantDetails,
  createFavoriteRestaurant,
  createUnfavoriteRestaurant,
};
