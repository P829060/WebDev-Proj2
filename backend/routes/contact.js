const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const contactData = new Contact(req.body);
    await contactData.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

module.exports = router;