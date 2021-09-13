const express = require('express');
const app = express();
const { User } = require('./models');

const PORT = 3000;
const LOCALHOST = 'http://localhost';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Mini Challenge - API dengan express & ORM Sequelize');
})


app.get('/users', (req, res) => {
    User.findAll().then(user => {
        res.status(200).json(user);
    })
})

app.post('/users', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(user => {
        res.status(200).json(user);
    }).catch((error) => {
        res.status(422).json("Can't create user!")
    })

})


app.listen(PORT, () => {
    console.log(`Server ready -> ${LOCALHOST}:${PORT}`);
})