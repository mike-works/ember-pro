import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;
const { host, namespace } = config.DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: "authorizer:oauth2",
  host,
  namespace,
  urlForDeleteRecord(id, modelName, snapshot) {
    // /api/posts/:post_id/  << delete
    //     comments/:comment_id
    switch (modelName) {
      case 'comment':
        return `${this.urlForDeleteRecord(snapshot.belongsTo("post").id, 'post', null)}/comments/${id}`;
      default: return this._super(...arguments);
    }
  },
  urlForUpdateRecord(id, modelName, snapshot) {
    // /api/posts/:post_id/  << update
    //     comments/:comment_id
    switch (modelName) {
      case 'comment':
        return `${this.urlForUpdateRecord(snapshot.belongsTo("post").id, 'post', null)}/comments/${id}`;
      default: return this._super(...arguments);
    }
  },
  urlForCreateRecord(modelName, snapshot) {
    // /api/posts/:post_id/  << find
    //     comments
    switch (modelName) {
      case 'comment':
        return `${this.urlForFindRecord(snapshot.belongsTo("post").id, 'post', null)}/comments`;
      default: return this._super(...arguments);
    }
  }

});