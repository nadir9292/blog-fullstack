import auth from "../middlewares/auth.js"
import PostModel from "../model/postModel.js"

const postRoutes = ({ app }) => {
  //POST
  app.post("/:userId/create-post", auth, async (req, res) => {
    const {
      params: { userId },
      session: { userId: sessionUserId },
      body: { title, content, is_published },
    } = req

    if (Number(userId) != sessionUserId) {
      res.status(403).send({ error: "acces denied !" })

      return
    }

    const post = await PostModel.query().insertAndFetch({
      title,
      content,
      is_published,
      userId,
    })

    res.send(post)
  })

  //GET post by author
  app.get("/:userId/my-posts", auth, async (req, res) => {
    const {
      params: { userId },
      session: { userId: sessionUserId },
    } = req

    if (Number(userId) != sessionUserId) {
      res.status(403).send({ error: "acces denied !" })

      return
    }

    const post = await PostModel.query().where("userId", userId)
    res.send(post)
  })

  //GET post by id
  app.get("/:postId/viewPost", async (req, res) => {
    const {
      params: { postId },
    } = req

    const post = await PostModel.query().findById(postId)

    if (!post) {
      res.status(401).send({ error: "post don't exist ! " })
      return
    }
    res.send(post)
  })

  // GET all posts
  app.get("/posts", async (req, res) => {
    const post = await PostModel.query()
    res.send(post)
  })
}

export default postRoutes
