const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true, // USE TLS
    auth: {
        user: "bizname1990@gmail.com",
        pass: "ommafmxfowobugft"
    }
});


module.exports = transport;