// Express web server example
const express = require('express');
const app = express();
const mongodb = require('./data/database');

 
//links to the routes folder
app.use('/', require('./routes'));

const port = 3000;


mongodb.initDb((err) => {
    if(err){
        console.log(err)
    }
    else{
        app.listen(process.env.PORT || port, () => {
            console.log('Web Server is listening at port ' + (process.env.PORT || port));
          });
    }
})


// app.listen(process.env.PORT || port, () => {
//   console.log('Web Server is listening at port ' + (process.env.PORT || port));
// });
 
