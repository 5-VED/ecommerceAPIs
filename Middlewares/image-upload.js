/**
 * File to upload images
 */

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/Uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    },
    fileFilter: (req, file, cb) => {
        if (file.mimeType === "image/png" || file.mimeType === "image/jpeg" || file.mimeType === "image/jpg") {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
})


const upload = multer({ storage: storage });


module.exports = upload
/**
 * Function to add Products into 
 */
