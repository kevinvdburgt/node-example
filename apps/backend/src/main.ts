import express from 'express';
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(express.json());

app.use('/', authRouter);
app.use('/', usersRouter);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`> Application is listening on port 3000`);
});
