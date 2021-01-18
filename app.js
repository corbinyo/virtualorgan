const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Unity Developers!');
});

let enemies = [
	{
	  "a": "0.0",
      "asharp": "0.0",
      "b": "0.0",
      "csharphi": "0.0",
      "csharplo": "0.0",
      "chi": "0.0",
      "clo": "0.0",
      "dsharphi": "0.0",
      "dlo": "0.0"
	}
];

app.get('/enemy', (req, res) => {
    res.send(enemies);
});

app.post('/enemy/create', (req, res) => {
	let newEnemy = {
      "a": req.body.a,
      "asharp": req.body.asharp,
      "b": req.body.b,
      "csharphi": req.body.csharphi,
      "csharplo": req.body.csharplo,
      "chi": req.body.chi,
      "clo": req.body.clo,
      "dsharphi": req.body.dsharphi,
      "dlo": req.body.dlo
	};

	enemies = newEnemy;
	console.log(enemies);
	res.send(enemies);
  

});

app.listen(3000, '159.203.96.205');
console.log('started and listening on 159.203.96.205 .');
