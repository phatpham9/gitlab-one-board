const { Router } = require('express');
const { list } = require('./controller');

const router = Router();

const RESOURCE = 'issues';

router.post(`/${RESOURCE}`, list);

module.exports = router;
