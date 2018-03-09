import Controller from "@ember/controller";
import { task } from "ember-concurrency";

export default Controller.extend({
  saveComment: task(function*(post, draftObject) {
    let newComment = this.store.createRecord("comment", {
      post,
      user: this.store.peekRecord("user", 1),
      body: draftObject.get("comment")
    });
    yield newComment.save()
    draftObject.set("comment", "");
  })
});
