import express from "express";
import path  from "path";
import fs from "fs";

const __dirname = path.resolve()
const PORT = 8095
const app = express()

app.get('/his7', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    app.use(express.static(__dirname + '/public'));
})

/*app.get('/his7/teacher1234', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public_teach', 'index.html'))
  app.use(express.static(__dirname + '/public_teach'));
})
app.get('/', (res, req) =>{
  res.send("Please write test adress")
})
*/
app.post('/his7/result/:name/:ball', (req, res) => {
    const name = req.params.name;
    const ball = req.params.ball;
    res.send(`${name}:${ball}`)
    fs.appendFile('student.csv', `${name};${ball}\n`, 'utf8', function (err) {
        if (err) {
          console.log("Error");
        } else{
          console.log('It\'s saved!');
          res.download(path.resolve(__dirname, '/', 'student.csv'));
        }
      });
})

app.listen(PORT, '192.168.1.7', () =>{
    console.log(`Server has been start on port ${PORT}...`)
})