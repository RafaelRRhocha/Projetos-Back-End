const fs = require('fs/promises');

const readTalkerFile = async () => {
  try {
    return JSON.parse(await fs.readFile('src/talker.json', 'utf-8'));
  } catch (error) {
    return null;
  }
};

const getTalkerId = async (id) => {
  const arrTalkers = await readTalkerFile();
  try {
  return arrTalkers.find((element) => element.id === Number(id));
  } catch (error) {
    return [];
  }
};

module.exports = { readTalkerFile, getTalkerId };