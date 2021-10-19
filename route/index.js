//module main
const mainRoute = require('./mainRoute');
const dataRoute = require('./dataRoute');

//Module cotroll path other module
function route(app){
    app.use('/data',dataRoute);
    app.use('/', mainRoute);
}

module.exports = route;