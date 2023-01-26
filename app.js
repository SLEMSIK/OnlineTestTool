import express from "express";
import path  from "path";
import fs from "fs";
import mysql from 'mysql'
;
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'school21_history.test'
});
 


const __dirname = path.resolve()
const PORT = 8095
const app = express()
app.get('/his7', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    app.use(express.static(__dirname + '/public'));
})
app.get('/his7/teacher1234', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'admin-tool', 'index.html'))
  app.use(express.static(__dirname + '/admin-tool'));
})
app.get('/', (req, res) =>{
  res.send("<h1>Write test adress</h1>")
})

app.post('/result/:name/:ball/:mark', (req, res) => {
    const name = req.params.name;
    const ball = req.params.ball;
    const mark = req.params.mark
    res.send(`${name}:${ball}:${mark}`)
    connection.connect();
    connection.query("INSERT INTO `students` (`id`, `name`, `mark`, `correct_answer`) VALUES (NULL, '"+name+"', '"+mark+"', '"+ball+"');");
    connection.end();
    fs.appendFile('admin-tool/student.csv', `${name},${ball},${mark},7Б\n`, 'utf8', function (err) {
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
