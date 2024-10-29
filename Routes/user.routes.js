const express = require('express')
const router = express.Router()
const {userwelcome, userDetails} = require("../Controllers/user.controllers.js")

router.get("/client", userwelcome)
router.post("/userDetails", userDetails)




module.exports = router