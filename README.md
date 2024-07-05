# IamHungry

IamHungry is a website that allows users to view restaurant reviews, add restaurants to their favorites list, and more.

## Main Features

1. **View Restaurant Reviews**: Users can view reviews of various restaurants.
2. **Add to Favorites**: Users can add restaurants to their favorites list.
3. **Image Compression**: Using [sharp](https://github.com/lovell/sharp) to compress images, speeding up load times.
4. **PWA (Progressive Web App)**:
   - **Offline Capabilities**: The app can function even without an internet connection.
   - **Install App to Desktop**: Users can install the app on their desktop for quick access.
5. **Using Webpack**: Bundling all assets and code for optimal performance.
6. **Semantic HTML**: Using semantic HTML to improve accessibility and SEO.
7. **Testing**:
   - **Unit Testing with Jest**: Using [Jest](https://jestjs.io/) for unit testing.
   - **End-to-End Testing with Codecept**: Using [Codecept](https://codecept.io/) for end-to-end testing.

## Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/rianabd/web_IamHungry.git
   cd web_IamHungry
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Run the Application**:

   ```sh
   npm run start-dev
   ```

4. **Build for Production**:

   ```sh
   npm run build
   ```

5. **Build Image for Production**:

   ```sh
   npm run build-image
   ```

6. **Run Tests**:
   - **Unit Tests**:
     ```sh
     npm run test
     ```
   - **End-to-End Tests**:
     ```sh
     npm run e2e
     ```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Babel
- **Bundling**: Webpack
- **Testing**: Jest, Codecept
- **PWAs**: Service Worker (Workbox)

---

Thank you for using IamHungry! Enjoy your culinary experience.
