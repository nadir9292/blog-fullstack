import commentsRoutes from "./commentsRoutes.js"
import postRoutes from "./postsRoutes.js"
import userRoutes from "./usersRoutes.js"

const allRoutes = ({ app, db }) => {
  userRoutes({ app, db })
  postRoutes({ app, db })
  commentsRoutes({ app, db })
}

export default allRoutes
