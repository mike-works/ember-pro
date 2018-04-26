// import { inject as service } from '@ember/service';
import Controller, { inject } from '@ember/controller';
import { getOwner } from '@ember/application';
import { service } from '@ember-decorators/service';

class ApplicationController extends Controller {
  @service('store')
  currentUser;

  location: Partial<Coordinates> = { latitude: null, longitude: null}

  constructor() {
    super();
    let coords: Promise<Coordinates> = getOwner(this).lookup('data:location');
    coords.then(coordsValue => {
      (this as any).set('location', coordsValue);
    });
  }
}


export default ApplicationController;