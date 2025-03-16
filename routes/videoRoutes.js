const express = require("express");
const axios = require("axios");
const Video = require("../models/Video");
const router = express.Router();
require("dotenv").config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

// Fetch video details and store in DB
router.get("/:id", async (req, res) => {
  try {
    const videoId = req.params.id;
    
    // Check if the video exists in the database
    let video = await Video.findOne({ videoId });

    if (!video) {
      // Fetch video details from YouTube API
      const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${YOUTUBE_API_KEY}`;
      const response = await axios.get(url);

      if (!response.data.items.length) {
        return res.status(404).json({ message: "Video not found" });
      }

      const title = response.data.items[0].snippet.title;

      // Save the video details to the database
      video = new Video({ videoId, title });
      await video.save();
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update video title in DB
router.post("/update-title", async (req, res) => {
  try {
    const { videoId, newTitle } = req.body;

    if (!newTitle) return res.status(400).json({ message: "Title cannot be empty" });

    const video = await Video.findOneAndUpdate(
      { videoId },
      { title: newTitle },
      { new: true, upsert: true }
    );

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
