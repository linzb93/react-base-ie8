const express = require('express');
const router = express.Router();

router.get('/name', (req, res) => {
    res.send('Your name');
});

module.exports = router;