var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index)

// GET /skills
router.get('/new', skillsCtrl.new);
router.get('/:skillsId', skillsCtrl.show);
// GET /skills/:id
// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new

// POST /skills
router.post('/', skillsCtrl.create);  // add this route

//DELETE /todo ----> /skills/:id

router.delete('/:id', skillsCtrl.delete);
module.exports = router;
