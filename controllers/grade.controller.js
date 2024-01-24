const grade = require('../models/grade_model');
const student = require('../models/student.model');


const createGrades = async (req, res)=>{
    try {
        if(!req.body.subject && ! req.body.score)
            res.status(400).json({message: "Body can not empty"});

        const studentId = req.body.studentId;
        student_grades = {
            studentId: studentId,
            subject: req.body.subject,
            score:req.body.score
        }
        const grades = await grade.create(student_grades);
        res.status(201).json({message: grades});
        console.log(grades);
    } catch (error) {
        res.status(400).json({message: error});
        console.error(error);
    }
};

const findGrades = async (req, res)=>{
    try {
        const grades = await grade.findAll({include: student});
        res.status(200).json({message: grades});
        console.log(grades);
    } catch (error) {
        res.status(400).json({message: error});
        console.error(error);
    }
};

/**Find single grade */
const findGrade = (req, res) =>{
    const id = Number(req.params.id);
    grade.findOne({
        where:{
            id:id
        },
        include: student
    }).then((response) =>{
        if(!response){
            res.status(400).json({message: `Grade with ID: ${id} does not exist`});
        }else{
            res.status(200).json({message: response});
            console.log(response);
        }
    }).catch((error) =>{
        res.status(500).json({message: error});
        console.log(error);
    });
};



module.exports = {
    createGrades,
    findGrades,
    findGrade
}