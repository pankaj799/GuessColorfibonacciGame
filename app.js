const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparse = require('body-parser');
const path = require('path');

const MONGODB_URI = "mongodb://localhost:27017/guesscolor";

app.set('view engine', 'ejs');
app.set('views','views');


app.use(bodyparse.urlencoded({
    extended : true
}));
app.use('/views',express.static(path.join(__dirname,'views')));

const userRoutes = require('./routes/userRouter');

app.use('/', userRoutes);

mongoose.connect(MONGODB_URI,
    {userNewUrlParser: true},
    () =>  console.log('Connected to DB!')
);
app.listen(4000);






