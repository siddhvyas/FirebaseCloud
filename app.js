const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/file/:fname', (req, res) => {
  fileName = req.params.fname
  var responseContent = "";
  filename = fileName + ".txt";
  
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) { 
      responseContent = "File not found!"
    }
    else {
      responseContent = data
      console.log('OK: ' + filename);
      res.send(responseContent)
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})