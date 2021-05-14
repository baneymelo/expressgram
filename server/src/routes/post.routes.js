const { Router } = require('express');
const { profile, create, all } = require("../controllers/post.controller");
const verifyToken = require("../middlewares/verifyToken");

const router = Router();

router.post('/create', verifyToken, create )
router.get('/all', all )
router.get('/:username', profile )

module.exports = router;