const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (!duplicateNotes.length) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
  } else {
    console.log(chalk.yellow.inverse("Note with given title exist"));
  }
};

const removeNote = (title) => {
  console.log(chalk.blue.inverse(`Removing note with title: "${title}"`));

  const notes = loadNotes();

  const restNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (restNotes.length < notes.length) {
    saveNotes(restNotes);
    console.log(chalk.bgGreen.black("Notes removed!"));
  } else {
    console.log(chalk.bgRed.black("Notes does not exist!"));
  }
};

const listNotes = () => {
  console.log(chalk.blue.inverse("Listing all the notes"));

  const notes = loadNotes();
  notes.forEach(({ title }) => {
    console.log(chalk.green(title));
  });
};

const loadNotes = () => {
  try {
    const noteJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(noteJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

module.exports = {
  addNote,
  listNotes,
  removeNote,
};
