var express = require('express');
var router = express.Router();

var teamIndia = [
  {
    Name: "Rohit",
    Role:"Batsman"
  },
  {
    Name: "Ajinkya",
    Role:"Batsman"
  },
  {
    Name: "Virat",
    Role:"Batsman"
  },
  {
    Name: "B Kumar",
    Role:"Bowler"
  },
  {
    Name: "MS Dhoni",
    Role:"Wicket Keeper"
  }
];

router.get('/',function (request,response){
  //response.render("Not supported yet");
  response.json(teamIndia);
});

module.exports = router;
