// IMPORTS
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
// import cors from 'cors';

// VARIABLES
const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
// app.use(cors());

// ROUTES
app.get('/', (req, res) => res.send('Hello World'));

// BINDING
app.listen(port, () => console.log(`Example app listening on port ${port}`));
