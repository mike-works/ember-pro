// @ts-check
import Application from "@ember/application";
/**
 * # TODO

* Pause boot
* Kick off geolocation request
    * Resume boot
    * Place value in container

* Retrieve value from container
* Render value
 */

/**
 * 
 * @param {Application} application 
 */
export function initialize(application) {
  application.deferReadiness();
  const { geolocation } = navigator;
  geolocation.getCurrentPosition(pos => {
    let { coords: { latitude, longitude } } = pos;
    application.advanceReadiness();
    let value = { lat: latitude, lng: longitude };
    //@ts-ignore Mike needs to make this more flexible
    application.register('data:location', value, { instantiate: false });
  });
}

export default {
  initialize
};
