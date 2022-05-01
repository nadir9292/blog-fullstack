import { Model } from "objection"

class CommentModel extends Model {
  static tableName = "comments"

  static findByPostId(postId) {
    return CommentModel.query().where("postId", postId)
  }
}

export default CommentModel
