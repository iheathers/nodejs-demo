const chalk = require("chalk");
const yargs = require("yargs");

const { addNote, readNote, listNotes, removeNote } = require("./notes");

yargs.command({
  command: "add",
  describe: "Add a New Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    addNote(title, body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a Node",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    removeNote(title);
  },
});

yargs.command({
  command: "read",
  describe: "Read a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    readNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: () => {
    listNotes();
  },
});

yargs.parse();
