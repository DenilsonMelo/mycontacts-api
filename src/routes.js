const { Router } = require('express');

const ContactController = require('./app/Controllers/ContactController');
const CategoryController = require('./app/Controllers/CategoryController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.delete('/categories/:id', CategoryController.delete);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);

module.exports = router;
