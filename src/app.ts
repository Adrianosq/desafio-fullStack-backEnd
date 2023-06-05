import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrors } from './error';
import { contactsRouter, loginRouter, userRouter } from './routes';
import cors from 'cors'

const app: Application = express();
app.use(cors())
app.use(express.json());

app.use('/login', loginRouter)
app.use('/user', userRouter)
app.use('/contacts', contactsRouter)

app.use(handleErrors);

export default app;
