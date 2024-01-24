const express = require('express');
const router = express.Router();
const { createStudent, getStudents, getStudent, updateStudent, deleteStudent } =  require('../../controllers/student.controller');

router.get("/", getStudents);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.post("/", createStudent);


module.exports = router;