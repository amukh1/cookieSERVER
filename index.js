const express = require('express');
var cors = require('cors')
const app = express();
const fs = require('fs')


let saves = [400, 300, 600]
// let saves = fs.readFile('./array.txt')


app.use(cors())


const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/api/newSave', (req, res) => {
  
    let reqURL = new URL(`http://127.0.0.1:3000${req.url}`)
    let newSave = reqURL.searchParams.get('save')
   
        saves.push(Number(newSave))
        console.log(saves[3])
        console.log(saves.sort(function(a, b) {
            return a - b;
          }))
          fs.writeFile('array.js', `let saves = [${saves}]`, function (err) {
            if (err) return console.log(err);
            console.log('Successfully saved a users data!');
          });
    
})

app.use(express.static('public'))



app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
