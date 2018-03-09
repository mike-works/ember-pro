import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;
const { host, namespace } = config.DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host,
  namespace,
  urlForCreateRecord(    modelName, snapshot){
    switch (modelName) {
      case 'comment':
        return `${this.urlForFindRecord(
          snapshot.belongsTo('post').id,
          'post',
          snapshot.belongsTo('post')
        )}/comments`;
      default: 
        return this._super(...arguments);
    }
  },
  urlForDeleteRecord(id, modelName, snapshot){
    switch (modelName) {
      case 'comment':
        return `${this.urlForFindRecord(
          snapshot.belongsTo('post').id,
          'post',
          snapshot.belongsTo('post')
        )}/comments/${id}`;
      default: 
        return this._super(...arguments);
    }
  },
  urlForUpdateRecord(id, modelName, snapshot){
    switch (modelName) {
      case 'comment':
        return `${this.urlForFindRecord(
          snapshot.belongsTo('post').id,
          'post',
          snapshot.belongsTo('post')
        )}/comments/${id}`;
      default: 
        return this._super(...arguments);
    }
  }
});