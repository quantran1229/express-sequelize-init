var express = require('express');
var router = express.Router();

import {
    validateToken
} from '../middlewares/token-authorization'

import {
    validate
} from './../middlewares/validatorExample'

import {
    helloWorld,
} from '../controllers/example'

router.get('/api/test', helloWorld)

module.exports = router;