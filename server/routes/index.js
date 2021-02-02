const router = require("express").Router()
const todos = require("./todos")
const UserController = require("../controllers/userController")

router.post("/register", UserController.postRegister)
router.post("/login", UserController.postLogin)
router.use("/todos", todos)

module.exports = router