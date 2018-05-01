// @ts-check
import Application from "@ember/application";
import { Promise } from "rsvp";
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

  let locPromise = new Promise((resolve, reject) => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(pos => {
      let { coords: { latitude, longitude } } = pos;
      let value = { lat: latitude, lng: longitude };
      resolve(value);
    });
  });
  //@ts-ignore Mike needs to make this more flexible
  application.register("data:location", locPromise, { instantiate: false });
}

export default {
  initialize
};
