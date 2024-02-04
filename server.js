const express = require('express');
const app = express();

let defautlPassword = "1";

app.use(express.json());

app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/index.html")
})

app.post('/login', (req, res) => {
  const { password } = req.body;

  if (defautlPassword === password) {
    res.json({ success: true });
  } else {
    res.status(400).end();
  }
});

app.post('/change-password', (req, res) => {
  const { oldPassword, newPassword } = req.body;
  
  if (defautlPassword === oldPassword) {
    defautlPassword = newPassword;
    res.json({ success: true });
  } else {
    res.status(400).end();
  }
});


app.listen(8000,()=>console.log("listen"));