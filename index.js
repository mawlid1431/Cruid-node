import express from 'express';
import bodyParser from 'body-parser';

import usersRoute from './routes/users.js'
const port = 5000;
const app = express();

app.use(bodyParser.json());

// Mounting the user routes



// app.use('/users', userRoutes);

app.use('/users', usersRoute)

// Home page route
app.get('/', (req, res) => {

    res.send('Hello, welcome to the Home page');
});

app.listen(port, () =>
    console.log(`The server is running at http://localhost:${port}`)
);
