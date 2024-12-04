const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err); // Log the error for debugging
      // Send a client-friendly error response with appropriate status code
      res.status(500).json({ error: 'Failed to retrieve user' });
    } else if (!user) {
      // Handle case where user is not found
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});
