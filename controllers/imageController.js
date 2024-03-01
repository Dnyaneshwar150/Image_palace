const Image = require("../models/image");

const imageController = {
  // Display upload form
  getUploadForm: (req, res) => {
    res.render("images/upload");
  },

  // Handle image upload
  uploadImage: async (req, res) => {
    if (!req.file) {
      req.flash("error", "Please select an image to upload");
      return res.redirect("/image/upload");
    }
    const newImage = new Image({
      userId: req.user._id,
      image: {
        url: req.file.path,
        filename: req.file.filename,
      },
      caption: req.body.caption,
    });

    try {
      await newImage.save();
      req.flash("success", "New Image Added!");
      res.redirect("/");
    } catch (error) {
      console.error("Error saving new image:", error);
      req.flash("error", "Failed to upload image.");
      res.redirect("/image/upload");
    }
  },

  // Display a specific image
  showImage: async (req, res) => {
    try {
      const image = await Image.findById(req.params.id);
      if (!image) {
        req.flash("error", "Image not found");
        return res.redirect("/");
      }
      res.render("images/show", { image });
    } catch (error) {
      console.error("Error fetching image:", error);
      req.flash("error", "Error fetching image.");
      res.redirect("/");
    }
  }
};

module.exports = imageController;
