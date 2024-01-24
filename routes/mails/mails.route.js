const express = require('express');
const router = express.Router();
const { sendMyMail } = require('../../controllers/mailer.controller');

router.post("/", sendMyMail);


module.exports = router;