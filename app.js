const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Unity Developers!');
});


let names = 
  {
    "name": " "
 };

app.get('/name', (req, res) => {
    res.send(names);
});

app.post('/name/create', (req, res) => {
  let newName = {
      "name": req.body.name,     
  };

  namies = newName;
  console.log(namies);
  res.send(namies);

});


let enemies = [
	{
    "a": "0.0",
    "asharp": "0.0",
    "b": "0.0",
    "chi": "0.0",
    "clo": "0.0",
    "csharphi": "0.0",
    "csharplo": "0.0",
    "dhi": "0.0",
    "dlo": "0.0",
    "dsharphi": "0.0",
    "dsharphlo": "0.0",
    "ehi": "0.0",
    "elo": "0.0",
    "fhi": "0.0",
    "fmid": "0.0",
    "fsharphi": "0.0",
    "fsharpmid": "0.0",
    "ghi": "0.0",
    "gsharp": "0.0"
  }
];

app.get('/enemy', (req, res) => {
    res.send(enemies);
});

app.post('/enemy/create', (req, res) => {
	let newEnemy = {
      "name": req.body.name,
      "a": req.body.a,
      "asharp": req.body.asharp,
      "b": req.body.b,
      "csharphi": req.body.csharphi,
      "csharplo": req.body.csharplo,
      "chi": req.body.chi,
      "clo": req.body.clo,
      "dhi": req.body.dhi,
      "dlo": req.body.dlo,
      "dsharphi": req.body.dsharphi,
      "dsharphlo": req.body.dsharphlo,
      "ehi": req.body.ehi,
      "elo": req.body.elo,
      "fhi": req.body.fhi,
      "fmid": req.body.fmid,
      "fsharphi": req.body.fsharphi,
      "fsharpmid": req.body.fsharpmid,
      "ghi": req.body.ghi,
      "gsharp": req.body.gsharp
	};

	enemies = newEnemy;
	console.log(enemies);
	res.send(enemies);
  

});

app.listen(3000, '159.203.96.205');
console.log('started and listening on 159.203.96.205, port 3000');
