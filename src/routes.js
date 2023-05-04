const { Router } = require('express');

const ContactController = require('./app/Controllers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index);

module.exports = router;
