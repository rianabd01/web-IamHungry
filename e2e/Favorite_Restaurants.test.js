const assert = require('assert');

Feature('Add Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('#loading');
  I.see('Tidak ada data', '#loading');
});

Scenario('add favorite one restaurant', async ({ I }) => {
  I.see('Tidak ada data', '#loading');

  I.amOnPage('/');

  I.seeElement('.item-name a');
  const firstRestaurant = locate('.item-name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.menu-item');

  const favoritedRestaurantTitle = await I.grabTextFrom('.item-name a');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unfavorite restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.item-name a');
  const firstRestaurant = locate('.item-name a').first();
  I.click(firstRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.menu-item');
  I.click(firstRestaurant);

  I.seeElement('#unfavorite-button');
  // pause();
  I.click('#unfavorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('#loading');
  I.see('Tidak ada data', '#loading');
});
