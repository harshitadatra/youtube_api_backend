const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const videoRoutes = require("./routes/videoRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
app.use(cors());
app.use(express.json());
console.log('MongoDB URI:', process.env.MONGO_URI);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/video", videoRoutes);
app.use("/comment", commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
