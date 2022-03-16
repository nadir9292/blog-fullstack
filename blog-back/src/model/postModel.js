import { Model } from "objection"
import UserModel from "./userModel.js"

class PostModel extends Model {
  static tableName = "posts"

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "posts.user_id",
          to: "users.id",
        },
      },
    }
  }
}

export default PostModel
