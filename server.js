'use strict';

var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
// let storage = {
//   storage: multer.diskStorage({
//     destination: (req, file, next) => {
//       next(null, './uploads');
//     },
//     filename: (req, file, next) => {
//       console.log(file)
//     }
//   })
// };
let storage = multer.memoryStorage();
let upload = multer({ storage: storage })
// require and use "multer"...

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(process.cwd() + '/public'));

app.route("/api/fileanalyse").post(upload.single('upfile'), (req, res) => {
  res.json({
    name: req.fielname,
    
    size: req.size
  });
})


app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
