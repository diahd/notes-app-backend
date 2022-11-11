/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-spaced-func */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
//Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP

//Membuat server
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    const server = Hapi.server({
        port: 5500,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['*'],
            },
          },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();