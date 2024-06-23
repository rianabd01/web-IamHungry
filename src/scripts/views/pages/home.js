import { createRestaurantsList } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurants-source';

const Home = {
  async render() {
    return `
    <h1>Mau Cari Makan?</h1>
    <p class="paragraph">
      Lelah seharian beraktivitas dan perut mulai keroncongan? Bingung mau
      makan apa dan di mana? Jangan khawatir, website ini hadir untuk membantu
      Anda menemukan restoran terbaik di seluruh Indonesia dengan mudah dan
      cepat. Jelajahi kekayaan kuliner Nusantara yang tak ada habisnya.
    </p>
    <p class="paragraph">
      Temukan cita rasa otentik masakan daerah dari Sabang sampai Merauke,
      nikmati hidangan laut segar hasil tangkapan nelayan lokal, puaskan
      selera dengan barbeque yang menggugah selera, penuhi gaya hidup sehat
      dengan pilihan vegetarian yang lezat, dan masih banyak lagi. Sesuaikan
      minat Anda berdasarkan lokasi, lihat rating dan foto menarik dari
      pengunjung lain, bandingkan harga dan menu, dan bahkan pesan tempat
      duduk secara online untuk menghindari antrian panjang
    </p>
    <h1>Daftar Restoran</h1>
    <article class="menu-items">
      <p id="loading">Tunggu...</p>
    </article>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('.menu-items');
    const loadingElement = document.querySelector('#loading');

    // Loading
    if (!restaurants) {
      loadingElement.style.display = 'block';
      loadingElement.innerText = 'Tidak ada data';
    } else {
      loadingElement.style.display = 'none';
    }

    // Error Handling
    try {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantsList(restaurant);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
