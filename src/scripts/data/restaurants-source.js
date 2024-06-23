import Swal from 'sweetalert2';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      if (!response.ok) {
        throw new Error('Tidak ada koneksi');
      }
      const responseJson = await response.json();

      return responseJson.restaurants;
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        Swal.fire({
          title: 'Error!',
          text: 'Periksa koneksi anda!!!',
          icon: 'error',
          confirmButtonText: 'Kembali',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: `Error : ${error}`,
          icon: 'error',
          confirmButtonText: 'Kembali',
        });
      }
      return false;
    }
  }

  static async restaurantDetails(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));

      if (!response.ok) {
        throw new Error('Tidak ada koneksi');
      }
      const responseJson = await response.json();

      return responseJson.restaurant;
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        Swal.fire({
          title: 'Error!',
          text: 'Periksa koneksi anda!!!',
          icon: 'error',
          confirmButtonText: 'Kembali',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: `Error : ${error}`,
          icon: 'error',
          confirmButtonText: 'Kembali',
        });
      }
      return false;
    }
  }
}

export default RestaurantSource;
