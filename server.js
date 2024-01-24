const express = require('express');
const cors = require('cors');
const students_routes = require('./routes/students/students.route.js');
const grades_routes = require('./routes/grades/grades.route.js');
const mail_routes = require('./routes/mails/mails.route.js');
const auth_routes = require('./routes/auth/auth.route.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

/** routes */ 
app.get("/", (req, res) =>{
    res.json({message: "THIS IS WEBAPI HOMEPAGE"}).send();
});
app.use("/api/students", students_routes);
app.use("/api/grades", grades_routes);
app.use("/api/mails", mail_routes);
app.use('/api/auth', auth_routes);

/** end routes */

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
});