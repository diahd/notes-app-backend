/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-spaced-func */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
//Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.

const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
      },
      {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
      },
      {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
      },
];

module.exports = routes;