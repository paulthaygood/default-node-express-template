const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

var application = express();
application.engine('mustache', mustache());

application.set('views', './views');
application.set('view engine', 'mustache');

application.use(bodyParser.urlencoded());

application.get('/', (request, response) => {
    response.render('login');
});

application.post('/', (request, response) => {
    if(request.body.email === 'admin' && request.body.password === 'qwer1234'){
        response.render('login-success')
    } else {
        //todo: return validation errors
        response.render('login');
    }
   
})

application.listen(3000);



