export function initialize(appInstance) {
  let fastbootSvc = appInstance.lookup('service:fastboot');
  let shoebox = fastbootSvc.get('shoebox');
  let store = shoebox.retrieve('request-info'); // might be undefined
  let ua = 'No-User-Agent';
  if (typeof FastBoot === 'undefined') { // client
    if (store && typeof store['user-agent'] === 'string') { // store exists
      // { 'user-agent': "I am a useragent" }
      ua = store['user-agent']
    }// else { // no store }
  } else { //server

    let request = fastbootSvc.get('request');
    ua = request.headers.get('user-agent');
    if (!store) { //create for the first time
      store = {};
      shoebox.put('request-info', store);
    }
    store['user-agent'] = ua;
  }
  console.log('User Agent -->', ua);
  appInstance.register(
    'data:request',
    Object.freeze({'user-agent': ua}),
    { instantiate: false }
  );
}

export default {
  initialize
};
