var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool', function(req,res){
  res.send('i am real good today!')
} )

module.exports = router;

//cluster user: Bacco
//cluster pass: 0US4QlZKgceQLqkB
//cluster connection: mongodb+srv://Bacco:0US4QlZKgceQLqkB@cluster0.qvnaf.mongodb.net/local_library?retryWrites=true&w=majority