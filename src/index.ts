import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message:'Hello GoStack!🤘🏼'})
});

app.listen(3333);