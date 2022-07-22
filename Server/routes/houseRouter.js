const Router = require('express');
const houseController = require('../controllers/houseController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');



router.post('/', checkRole('ADMIN'), houseController.create);
router.get('/', houseController.getAll);
router.get('/:id', houseController.getOne);

module.exports = router;