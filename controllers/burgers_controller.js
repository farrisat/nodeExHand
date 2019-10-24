var express = require("express");
var burger = require("../config/orm.js");
var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post("/makeBurger/:burgerName", function(req, res){
  var burgerName = req.params.burgerName;
  burger.create(burgerName,  function(data) {
      res.json(data);
  })
 })

router.put("/devourBurger/:burgerName", function(req,res) {
    var burgerName = req.params.burgerName;
    burger.update(burgerName, true, function(data) {
        res.json(data);
    })
})







module.exports = router;


