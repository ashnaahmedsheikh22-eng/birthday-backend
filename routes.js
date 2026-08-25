const express = require('express')
const verifyToken = require('./middleware')
const { Login } = require('./controllers')
const router = express.Router()



router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: "Dashboard access successful",
    user: req.user,
  });
});

router.post('/login', Login)

module.exports = router