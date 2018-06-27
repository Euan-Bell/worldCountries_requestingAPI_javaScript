const PubSub = require('./helpers/pub_sub.js');
const Request = require('./helpers/request.js');

const WorldCountries = function () {
};

WorldCountries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/');

  request.get((worldCountriesData) {
    PubSub.publish('WorldCountries-loaded', worldCountriesData);
    console.log('WorldCountries-loaded');
  })

  PubSub.subscribe('InputView:change', (event) {
      const selectedIndex = event.detail;
      this.publishFWorldCountriesData(selectedIndex);
    });
};
module.exports = WorldCountries;
