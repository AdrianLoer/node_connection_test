const express = require('express')
const app = express()

var port = process.env.CT_PORT;
var identifier = process.env.CT_IDENTIFIER;

app.get('/', function (req, res) {
  res.send(identifier + "\n" + new Date())
})

app.listen(port, function () {
  console.log('Server started for port ' + port + '. Requests include the identifier: ' + identifier);
})