import EmberObject from "@ember/object";


class CommentDraft extends EmberObject.extend({}) {
  static initialState(comp) {
    let postId = comp.get('model.id');
    return {
      body: ''
    };
  }
}

export default CommentDraft;