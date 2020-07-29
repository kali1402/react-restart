var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function (req, res, next) {
    const arr = req.body.text.split(',');
    const idx = Math.floor(Math.random() * arr.length);
    const retrunData = {
        text: arr[idx].trim(),
        response_type: 'in_channel'
    };
    res.send(retrunData);
});

module.exports = router;
