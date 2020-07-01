const swagger = require('./swagger/swagger');
const swaggerUi = require("swagger-ui-express");
const express = require('express')
const app = express();



const port = process.env.PORT || 5000;


// configure middleware
app.set('port', port) // set express to use this port

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger.specs, swagger.uiOptions));

app.get('/', function(req, res){
    res.send("habib");
});

// server listening to the port 5000
//app.listen(port, () => console.log(`Listening the port ${port}...`))
server = app.listen(5000,function(){
    var port = server.address().port;
    console.log('Running on port no. '+port);
})