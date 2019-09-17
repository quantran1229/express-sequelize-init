import express from 'express';

import bodyParser from 'body-parser';

import {
  cfg
} from './config';
import {
  getLogger
} from './services/logger';


const logger = getLogger('API SERVER');

const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: false
  }))

import router from './routers/router-example'



app.use(router)

app.listen(cfg('APP_PORT', parseInt) || 3000, cfg('APP_HOST', String), function () {
  logger.info(`Server running on https://${cfg('APP_HOST', String)}:${cfg('APP_PORT', parseInt)}`)
});