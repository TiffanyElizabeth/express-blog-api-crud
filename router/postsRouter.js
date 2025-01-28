const express = require("express");

const router = express.Router();

const postsController = require("../controller/postsController");

// index
router.get("/", postsController.index);

// show
router.get("/:id", postsController.show);

// create
router.post("/", postsController.create);
/*
router.post('/', function(req, res) {
    console.log(req.body);
    res.send('New post');
});
*/

// update (replace)
router.put("/:id", postsController.update);

// modify (edit)
router.patch("/:id", postsController.modify);

// destroy (delete)
router.delete("/:id", postsController.destroy);

module.exports = router; 