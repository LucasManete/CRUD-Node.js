const {Router} = require('express')

const UserController = require("./controllers/UserController")

const routes = Router()

routes.get("/users", UserController.index)

routes.post("/users", UserController.create)

routes.get("/users/:userId", UserController.show)

routes.delete("/users/:userId", UserController.delete)

routes.put("/users/:userId", UserController.update)



module.exports = routes