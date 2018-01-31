var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req);		
  res.send('id:' + req.params.id);
});

module.exports = router;
