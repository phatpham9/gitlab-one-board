const { Router } = require('express');

const { list } = require('./controller');

const router = Router();

const RESOURCE = 'labels';

router.get(`/${RESOURCE}`, list);

module.exports = router;
