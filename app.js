const express = require('express');

const morgan = require('morgan');

const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');

const app = express();

app.use(express.json());
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// app.use((req, res, next) => {
//   console.log('Hello from the middleware 👋');
//   console.log(new Date().toISOString());
//   console.dir(req.ip);
//   next();
// });

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

module.exports = app;
