const student = require('../models/student.model');
const Grade = require('../models/grade_model');
const Student = require('../models/student.model');

//Retrieve all students from the db
const createStudent = async (req, res) =>{
    try{
        if(!req.body.firstName && !req.body.lastName){
            res.status(400).json({message: 'body can not be empty'});
            return
        };

        const students = {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }

        const response = await student.create(students);
        res.status(201).json(response);
        console.log(response);

    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
}


const getStudents = (req, res) =>{
    student.findAll({include: Grade}).then((response) =>{
        res.status(200).json({message: response}).send();
        console.log(response);
    }).catch((error) =>{console.log("Internal server error", error)})
}

/**Get single student */
const getStudent = (req, res) =>{
    const id = Number(req.params.id);
    student.findOne({
        where:{
            id:id,
        },
        include: Grade
    }).then((response) =>{
        if(!response){
            res.status(400).json({message: "Student with id not found"});
        }else{
            res.status(200).json({message: response});
            console.log(response)
        }
    }).catch((error) =>{
        res.status(400).json({message: "An error has occured"});
        console.log(error);
    });
}

/**Update student */
const updateStudent = (req, res) =>{
    const id = Number(req.params.id);
    const payload = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    student.update(payload,{
        where:{
            id:id
        }
    }).then(num =>{
        if(num == 1){
            res.status(200).json({message: "Student updated successfully"})
        }else{
            res.status(400).json({message: `can not update student with ID ${id}`});
        }
    }).catch((error) =>{
        res.status(500).json({message: "INTERNAL SERVER ERROR", error});
        console.log(error);
    })

}

/**Delete student */
const deleteStudent = (req, res) =>{
    const id = Number(req.params.id);
    Student.destroy({
        where:{
            id:id
        }
    }).then(num =>{
        if(num == 1){
            res.status(200).json({message: "Student deleted successfully"});
        }else{
            res.status(400).json({message: `can not update student with ID ${id}`})
        }
    }).catch((error) =>{
        res.status(500).json({message: "Internal Server Error", error});
    });
};



module.exports = {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
};