const path = require('path');
const express = require('express');
var morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to database
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resourses/views'));
console.log('path:', path.join(__dirname, 'resourses/views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
