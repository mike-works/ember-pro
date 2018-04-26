import Application from '@ember/application';

export function initialize(application: Application): void {
  // application.inject('route', 'foo', 'service:foo');
  
  let locPromise = typeof window !== 'undefined'
    ? new Promise<Coordinates>((resolve, reject) => {
      const { geolocation } = navigator;
      geolocation.getCurrentPosition(pos => {
        let {
          coords: { latitude, longitude }
        } = pos;
        resolve(pos.coords);
      });
    })
    : Promise.resolve({latitude: null, longitude: null});
  application.register("data:location", locPromise as any, {
    instantiate: false
  });

  
}

export default {
  initialize
};
