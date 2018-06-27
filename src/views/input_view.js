const PubSub = require('./helpers/pub_sub.js');

const InputView = function (container) {
  this.element = element;
};
InputView.prototype.getCountriesData = function () {
  PubSub.subscribe('WorldCountries-loaded', (event) {
    const allWorldCountries = (event.detail):
    this.populate(allWorldCountries);
    console.log(allWorldCountries);
  });

  this.element.addEventListener('change', (event) {
    const selectedIndex = event.target.value;
    PubSub.publish('InputView:change', selectedIndex);
    console.log('InputView:change');
  });
}
