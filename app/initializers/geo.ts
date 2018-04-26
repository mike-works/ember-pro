import Application from '@ember/application';

export function initialize(application: Application): void {
  // application.inject('route', 'foo', 'service:foo');
  const { geolocation } = navigator;

  let locPromise = new Promise<Coordinates>((resolve, reject) => {
    geolocation.getCurrentPosition(pos => {
      let {
        coords: { latitude, longitude }
      } = pos;
      resolve(pos.coords);
    });
  });
  application.register("data:location", locPromise as any, {
    instantiate: false
  });

  
}

export default {
  initialize
};
