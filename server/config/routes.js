//-------------------ROUTES SETUP------------------

const mongoose = require('mongoose'),
    actions = require('../controllers/actions')

module.exports = (app) => {
    //ROUTES
app.get('/home', (req, res) => actions.index(req,res))

app.get('/:id', (req,res) => actions.show (req,res))

app.post('/create', (req,res) => actions.create (req,res))

app.post('/update/:id', (req,res) => actions.update (req,res))

app.get('/destroy/:id', (req,res) => actions.destroy(req,res))
}