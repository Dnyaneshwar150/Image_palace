const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });
const imageController = require("../controllers/imageController");

// Handling image uploads
router.route("/upload")
  .get(isLoggedIn, imageController.getUploadForm)
  .post(isLoggedIn, upload.single('image'), imageController.uploadImage);

// Handling specific image display
router.route("/:id")
  .get(imageController.showImage);

module.exports = router;
