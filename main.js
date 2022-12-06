import './dotenv-load.js';
import express, { json } from 'express';
import cors from 'cors';

import Hello from './services/Hello.js';

const app = express();

app.use([cors(), json()]);

app.get("/", Hello);

const host = process.env.APP_HOST ?? '0.0.0.0';
const port = process.env.APP_PORT ?? '8080';

app.listen(port, host, () => {
    console.log(`App is listening on: http://${host}:${port}`);
})