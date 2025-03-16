const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// Add a comment
router.post("/add", async (req, res) => {
  try {
    const { videoId, text } = req.body;
    if (!text) return res.status(400).json({ message: "Comment cannot be empty" });

    const comment = new Comment({ videoId, text });
    await comment.save();
    
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get comments for a video
router.get("/:videoId", async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a comment
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
