const Image = require("../models/image");

const homeController = {
  // Display welcome page or all images for a logged-in user
  index: async (req, res) => {
    if (!req.user) {
      console.log("No user logged in");
      return res.render("welcome");
    }
    try {
      const allImages = await Image.find({ userId: req.user._id });
      if (allImages.length === 0) {
        req.flash("success", "Log in successful, but no images found. Please upload images to explore!!");
        return res.redirect("/image/upload");
      }
      res.render("index", { allImages });
    } catch (error) {
      console.error("Error fetching images:", error);
      req.flash("error", "Error fetching images");
      res.render("index", { allImages: [] });
    }
  }
};

module.exports = homeController;
