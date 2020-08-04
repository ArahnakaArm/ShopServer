const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send(req.user);
});


router.get('/profile', (req, res, next)  => {
  res.send(req.user);
});

module.exports = router;