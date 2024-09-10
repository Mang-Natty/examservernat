const express = require('express');
const app = express();

// subject
app.get('/subject', (req, res) => {
  res.send('ITE314');
});

// exam
app.get('/exam', (req, res) => {
  res.send('P2 EXAM DETAILS 30 items written 20 points hands on. 50 points total.');
});

// node
app.get('/node', (req, res) => {
  res.send('NODEJS');
});

// My Data
app.get('/mydata', (req, res) => {
  res.json({
    subject: 'ITE314',
    exam: 'P2',
    node: 'NODEJS'
  });
});

// port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
