import express from "express"
import AuthenRoute from "./authen.route"
export default () => {
  const router = express.Router()
  router.use("/", AuthenRoute())
  return router
}