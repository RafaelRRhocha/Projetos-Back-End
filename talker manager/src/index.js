const fs = require('fs/promises');

const express = require('express');
const bodyParser = require('body-parser');

const crypto = require('crypto');
const { readTalkerFile, getTalkerId } = require('./middleware/talkers');

const { validateEmail, passwordValidate } = require('./middleware/loginValidate');

const tokenValidate = require('./middleware/tokenValidate');

const validateAllTalker = require('./middleware/talkerValidate');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (_req, res) => {
  const readTalker = await readTalkerFile();
  res.status(200).json(readTalker);
});

app.get('/talker/search', tokenValidate, async (req, res) => {
  try {
    const { q } = req.query;
    const allTalkers = await readTalkerFile();
    const talkersByQuery = allTalkers.filter((e) => e.name.includes(q));
    if (q) {
      return res.status(200).json(talkersByQuery);
    } 
      return res.status(200).json([]);
  } catch (error) {
    return null;
  }
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await getTalkerId(id);
  if (talkers) { return res.status(200).json(talkers); }
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  validateEmail(email, res);
  passwordValidate(password, res);

  return res.status(200).json({ token: crypto.randomBytes(8).toString('hex') });
});

app.post('/talker', tokenValidate, validateAllTalker, async (req, res) => {
  try {
    const allTalkers = await readTalkerFile();
    const newTalker = { id: allTalkers.length + 1, ...req.body };
    allTalkers.push(newTalker);
    await fs.writeFile('src/talker.json', JSON.stringify(allTalkers));
    return res.status(201).json(newTalker);
  } catch (error) {
    return null;
  }
});

app.put('/talker/:id', tokenValidate, validateAllTalker, async (req, res) => {
  try {
    const { id } = req.params;
    const allTalkers = await readTalkerFile();
    const talkersByIndex = allTalkers.findIndex((e) => Number(e.id) === Number(id));
    const newTalker = { id: Number(id), ...req.body };
    allTalkers[talkersByIndex] = newTalker;
    await fs.writeFile('src/talker.json', JSON.stringify(allTalkers));
    return res.status(200).json(newTalker);
  } catch (error) {
    return null;
  }
});

app.delete('/talker/:id', tokenValidate, async (req, res) => {
  try {
    const { id } = req.params;
    const allTalkers = await readTalkerFile();
    const deleteTalker = allTalkers.filter((talker) => Number(talker.id) !== Number(id));
    await fs.writeFile('src/talker.json', JSON.stringify(deleteTalker));
    return res.status(204).json();
  } catch (error) {
    return null;
  }  
});
