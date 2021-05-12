const { Router } = require('express');
const { post, profile } = require("../controllers/post.controller");
const verifyToken = require("../middlewares/verifyToken");

const router = Router();

router.post('/post', verifyToken, post)
router.get('/post/:username', profile)

module.exports = router;