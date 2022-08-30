const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    res.send('<h1>Mello from Shop!</h1>');
});

module.exports = router;

