const express = require("express");

const router = express.Router();
const validationParamId = require("../middlewares/validationParamid");
const controlloCibo = require("../controllers/controlloCibo")

router.use("/:id",)

// index
router.get('/dolci', controlloCibo.index);


// show
router.get('/dolci/:id', controlloCibo.show); (req, res)=> 

// create
router.post("/dolci", (req, res) => {
    res.send("Creazione nuovo post");
  });

// update
router.put("/dolci/:id", (req, res) => {
    res.send(`Modifica integrale del post: ${req.params.id}`);
  });

// modify
router.patch("/dolci/:id", (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.id}`);
  });

//destroy
router.delete("/dolci/:id", controlloCibo.destroy); 

  module.exports = router;