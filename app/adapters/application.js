import DS from "ember-data";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import config from "../config/environment";

const { JSONAPIAdapter } = DS;
const { host, namespace } = config.DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: "authorizer:oauth2",
  host,
  namespace,
  urlForDeleteRecord(id, modelName, snapshot) {
    switch (modelName) {
      case "comment": {
        let post = snapshot.belongsTo("post");
        let postId = post.id;
        return [
          this.urlForFindRecord(postId, "post", post),
          "comments",
          id
        ].join("/");
      }
      default:
        return this._super(...arguments);
    }
  },
  urlForUpdateRecord(id, modelName, snapshot) {
    switch (modelName) {
      case "comment": {
        let post = snapshot.belongsTo("post");
        let postId = post.id;
        return [
          this.urlForFindRecord(postId, "post", post),
          "comments",
          id
        ].join("/");
      }
      default:
        return this._super(...arguments);
    }
  },
  urlForCreateRecord(modelName, snapshot) {
    switch (modelName) {
      case "comment": {
        let post = snapshot.belongsTo("post");
        let postId = post.id;
        return [this.urlForFindRecord(postId, "post", post), "comments"].join(
          "/"
        );
      }
      default:
        return this._super(...arguments);
    }
  }
});
