import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Accorsa API');
});

app.listen(port, () => {
  console.log(`Accorsa server listening on port ${port}`);
});
