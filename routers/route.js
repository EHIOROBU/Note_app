const express = require("express")
const authenticate = require("../middleware/authenticate")
const router = express.Router()

const { getUser, CreateUser, accessUser, getUserById } = require("../controllers/userController");
const { createNote, updateNote, deleteNote, getNote, getNoteById } = require("../controllers/noteController")
const { createReminder, fetchReminder } = require("../controllers/reminderController")
//users route endpoint
router.get("/", getUser)
router.post("/register", CreateUser)
router.post("/login", accessUser)
router.get("/:id", getUserById)
//note route endpoints
router.post("/note", authenticate, createNote)
router.patch("/note/:id", authenticate, updateNote)
router.delete("/note/:id", authenticate, deleteNote)
router.get("/notes", getNote)
router.get("/note/:id", getNoteById)
//reminder route endpoints
router.post("/reminder", authenticate, createReminder)
router.get("/reminder", authenticate, fetchReminder)


module.exports = router;