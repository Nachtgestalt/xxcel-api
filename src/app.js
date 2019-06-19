import express from 'express';
import consign from 'consign';

const app = express();
const consignConfig = {
    cwd: __dirname
};
consign(consignConfig)
    .include('database/models/index.js')
    // .then('database/models/index.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);

