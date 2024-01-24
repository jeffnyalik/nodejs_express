const sequelize = require('../db/db');
const book = require('../models/book.model');


/**Insert a book in the databse */
// sequelize.sync().then(()=>{
//     book.create({
//         title: "Things Fall Apart",
//         author: "Chinua Achebe",
//         description: "Things fall apart description",
//         release_data: "1990-12-15",
//         subject:3
//     }).then((res) =>{
//         console.log(res);
//     }).catch((error) =>{
//         console.log("Failed to insert data in the database table: ", error);
//     })
// }).catch((error) =>{
//     console.log("INTERNAL SERVER ERROR: ", error);
// });


/**Select all books from the database */
sequelize.sync().then(()=>{
    book.findAll().then((res) =>{
        console.log(res);
    }).catch((error) =>{
        console.log("Can not fetch data from the database", error);
    })
}).catch((error) =>{
    console.log("INTERNAL SERVER ERROR", error);
});


/** check if book id exist and return if not throw an error */
/**Get a single book if it exists */
// sequelize.sync().then(()=>{
//     book.findOne({
//         where:{
//             id: 3
//         }
//     }).then((res) =>{
//         if(!res){
//             console.log("Book with ID does not exist");
//         }else{
//             console.log(res);
//         }
//     }).then(()=>{
//         console.log(res);
//     }).catch((error)=>{
//         console.log("Can not retrieve the book with the ID", error);
//     })
// }).catch((error) =>{
//     console.log("AN INTERNAL SERVER ERROR", error);
// })

// /**Get a single book */
// sequelize.sync().then(()=>{
//     book.findOne({
//         where:{
//             id: 3
//         }
//     }).then((res) =>{
//         console.log(res);
//     }).catch((error) =>{
//         console.log("Can not fetch data from the database: ", error)
//     })
// }).catch((error) =>{
//     console.log("INTERNAL SERVER ERROR", error);
// });


// sequelize.sync().then(()=>{
//     book.destroy({
//         where:{
//             id: 1
//         }
//     }).then((res) =>{
//         console.log("Data has been deleted successfully");
//     }).catch((error) =>{
//         console.log("Can not delete the data from the database", error);
//     })
// }).catch((error) =>{
//     console.log("INTERNAL SERVER ERROR", error);
// });

