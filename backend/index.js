const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const contactRoutes = require('./routes/contact');
const Contact = require('./models/Contact');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use('/api/contact', contactRoutes);


app.get("/api/reviews", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ submittedAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


