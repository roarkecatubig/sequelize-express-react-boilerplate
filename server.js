const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

// const users = require('./routes/api/users');

const app = express();

const db = require("./models")

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/library-api-routes.js")(app);
// app.use('api/users', users)

const port = process.env.PORT || 5000;

db.sequelize.sync({force: true}).then(() => {
    app.listen(port, () => console.log('Server started on port ' + port));
})
