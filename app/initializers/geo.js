import { Promise } from 'rsvp';

export function initialize(app) {
  const { geolocation } = navigator;
  let locPromise = new Promise((resolve) => {
    geolocation.getCurrentPosition(pos => {
      let { coords: { latitude: lat, longitude: lng } } = pos;
      resolve({ lat, lng });
    });
  })
  app.register('data:location', locPromise , { instantiate: false });
  
}

export default {
  initialize
};