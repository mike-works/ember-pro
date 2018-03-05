export function initialize(app) {
  const { geolocation } = navigator;
  app.deferReadiness();
  geolocation.getCurrentPosition(pos => {
    let { coords: { latitude: lat, longitude: lng } } = pos;
    app.register('data:location', { lat, lng }, { instantiate: false });
    app.advanceReadiness();
  });
}

export default {
  initialize
};