const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user ID
  db.getUser(userId, (err, user) => {
    if (err) {
      // Incorrect error handling - should send a proper error response
      console.error(err);
      res.status(500).send('Something went wrong');
    } else {
      res.json(user);
    }
  });
});