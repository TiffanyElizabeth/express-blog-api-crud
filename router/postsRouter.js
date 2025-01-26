const express = require("express");

const router = express.Router();

const postsController = require("../controller/postsController");

// index
router.get("/", postsController.index);

// show
router.get("/:id", postsController.show);

// create
router.post("/", () => {});

// update (replace)
router.put("/:id", () => {});

// modify (edit)
router.patch("/:id", () => {});

// destroy (delete)
router.delete("/:id", postsController.destroy);

module.exports = router; 