const express = require('express');
const app = express();

const users = {
  'john': 'secret' 
};

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] === password) {
    res.json({ success: true });
  } else {
    res.status(400).end();
  }
});

app.post('/change-password', (req, res) => {
  const { username, oldPassword, newPassword } = req.body;
  
  if (users[username] === oldPassword) {
    users[username] = newPassword;
    res.json({ success: true });
  } else {
    res.status(400).end();
  }
});

