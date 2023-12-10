const express = require("express")
const router = express.Router()
const multer = require("multer")
const {createEmploye, updateEmploye, getAllEmployes, deleteEmploye } = require("../controllers/employe_Controller")

// multer storage setup ------------

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "public/images")
    },
    filename: (req, file, cb)=> {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname )
    }
})
const upload = multer({storage:storage})

//---------------------------------

router.post("/",upload.single(), createEmploye)
router.get("/",getAllEmployes)
router.delete("/:id",deleteEmploye)
router.put("/update/:id", upload.single("productImage"),updateEmploye)

module.exports = router