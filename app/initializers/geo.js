import { Promise } from 'rsvp';

export function initialize(app) {
  let locPromise;
  if (typeof FastBoot === 'undefined') {
    const { geolocation } = navigator;
    locPromise = new Promise((resolve) => {
      geolocation.getCurrentPosition(pos => {
        let { coords: { latitude: lat, longitude: lng } } = pos;
        resolve({ lat, lng });
      });
    });
  } else {
    locPromise = Promise.resolve({ lat: 'TBD', lng: 'TBD'});
  }
  app.register('data:location', locPromise , { instantiate: false });
  
}

export default {
  initialize
};