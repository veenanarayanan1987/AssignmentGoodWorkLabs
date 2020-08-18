import 'dotenv/config';
import express from 'express';

import routes from './routes';

const app = express();
app.use(express.json());

// Routes
app.use('/meta-data', routes.metaData);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
