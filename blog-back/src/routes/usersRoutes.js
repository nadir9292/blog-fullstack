import jsonwebtoken from "jsonwebtoken"
import config from "../../config.js"
import hashPassword from "../method/hashPassword.js"
import userModel from "../model/userModel.js"
import auth from "../middlewares/auth.js"
import UserModel from "../model/userModel.js"

const userRoutes = ({ app }) => {
  //POST REGISTER
  app.post("/register", async (req, res) => {
    const {
      body: { pseudo, email, password },
    } = req

    const user = await userModel.findUserByEmail(email)

    if (user) {
      res.send({
        info: "if you don't have an account, we will send you an email.",
      })
      return
    }

    const [passwordHash, passwordSalt] = hashPassword(password)

    await userModel
      .query()
      .insertAndFetch({ pseudo, email, passwordHash, passwordSalt })

    res.send({
      info: "if you don't have an account, we will send you an email.",
    })
    res.send(user)
  })

  //POST LOGIN
  app.post("/login", async (req, res) => {
    const {
      body: { email, password },
    } = req

    const user = await userModel.findUserByEmail(email)

    if (!user) {
      res.status(401).send({ error: "bad email or password ! " })
      return
    }

    if (!user.checkPassword(password)) {
      res.status(401).send({ error: "bad email or password ! " })
      return
    }

    const jwt = jsonwebtoken.sign(
      { payload: { userId: user.id } },
      config.security.session.secret,
      { expiresIn: config.security.session.expiresIn }
    )

    const userId = user.id

    res.send({ jwt, userId })
  })

  //GET BY ID
  app.get("/user/:userId", auth, async (req, res) => {
    const {
      params: { userId },
      session: { userId: sessionUserId },
    } = req

    if (Number(userId) != sessionUserId) {
      res.status(403).send({ error: "acces denied !" })

      return
    }

    const user = await UserModel.query().findById({ userId })
    res.send(user)
  })
}

export default userRoutes
