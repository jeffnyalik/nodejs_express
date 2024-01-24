const express = require('express');
const router = express.Router();
const { createGrades, findGrades, findGrade } =  require('../../controllers/grade.controller');

router.post("/", createGrades);
router.get("/", findGrades);
router.get("/:id", findGrade);


module.exports = router;