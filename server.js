const express = require("express")
const app = express()
const bodyParser= require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.urlencoded({ extended: true }));

require('./server/config/database')
require('./server/config/routes')(app)


app.listen(8000, () => console.log("listening on port 8000"));