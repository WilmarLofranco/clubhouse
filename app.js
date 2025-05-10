// require dependencies
const express = require('express');
const app = express();

// require modules
const routes = require('./routes/routes.js');

// set ejs for views
app.set('view engine', 'ejs');
app.set('views', './views');

// define middlewares
app.use(express.urlencoded({extended:true}));

// pass routing
app.get('/', )

// general error handler
app.use((err, req, res, next) => {
    console.err(err.stack);
    res.status(err.status).send(`Error: ${err.message}`)
})

// page not found handler
app.use((req, res) => {
    res.status(404).send('Error: Page not found')
})

// Connect/Listen to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));