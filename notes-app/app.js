const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { argv } = require('yargs');


//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>
        notes.addNote(argv.title, argv.body)

})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)

})

//read
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: () => notes.listNotes()

})


//list 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading note!')
    }
})

yargs.parse()