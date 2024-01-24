const transport = require('../config/mail.config');


const sendMyMail = (req, res)=>{
    try {
        transport.verify((error, success) =>{
            if(error){
                res.status(500).json({message: "Something wnent wrong, contact admin", error});
                console.log("error", error);
            }else{
                const info = transport.sendMail({
                from: 'bookings.bookvacayafrica.com',
                to: 'nyakeoloo@gmail.com',
                subject: "Computer programming",
                text: "Software development is fun",
                html: '<p>The best in the world sofar</p>'
                });
                res.status(200).json({message: info.messageId});
                console.log(info.messageId);
                console.log(success);
            }
        })
    } catch (error) {
        res.status(400).json({message: error});
        console.log(error);
    }
}


module.exports = { sendMyMail };
