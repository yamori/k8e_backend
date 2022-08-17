var fs = require('fs');

const express = require("express");
const app = express();
const cors = require('cors');

app.listen(process.env.PORT,
   function () {
      console.log(`Server Start at the Port ${process.env.PORT}`);
      app.emit("appStarted");
   }
);

app.use(cors());

// Health check
var healthObj = { 'status': 'ok' };
app.get('/health', healthCheck);
function healthCheck(request, response) {
   response.send(healthObj);
}

// Example JSON object
var data = fs.readFileSync('public/example.json');
var elements = JSON.parse(data);
app.get('/example', exampleJSON);
function exampleJSON(request, response) {
   response.send(elements);
}

