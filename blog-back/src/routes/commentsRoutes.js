import auth from "../middlewares/auth.js"
import CommentModel from "../model/commentModel.js"

const commentsRoutes = ({ app }) => {
  //GET all comments by post
  app.get("/viewComments", async (req, res) => {
    const postId = req.query.postId

    const comments = await CommentModel.findByPostId(postId)

    if (!comments) {
      res.status(401).send({ error: "post don't exist ! " })
      return
    }

    res.send(comments)
  })

  //post Comment
  app.post("/viewComments", async (req, res) => {
    const {
      body: { content, is_published, userId, postId },
    } = req

    const comment = await CommentModel.query().insertAndFetch({
      content,
      is_published,
      userId,
      postId,
    })

    res.send(comment)
  })
}

export default commentsRoutes
