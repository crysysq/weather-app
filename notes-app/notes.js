const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return "Your notes..."
}
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log('New note added!');
    } else {
        console.log('Note title taken');
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const result = notes.filter((note) => note.title !== title)
    if (notes.length > result.length) {
        savedNotes(result)
        console.log(chalk.green('Note removed'))
    } else {
        console.log(chalk.red('Title not found'));
    }
}

const listNotes = () => {
    console.log('You Notes:');
    const notes = loadNotes()
    notes.forEach((note) => console.log('-' + note.title))
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}