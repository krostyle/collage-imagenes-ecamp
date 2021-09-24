const { Router } = require('express');
const { sendIndex, sendCollage, saveImage, deleteImage } = require('../controllers/collage.controllers');

const router = Router();

router.get('/', sendIndex);

router.get('/collage', sendCollage)

router.post('/imagen', saveImage)

router.get('/deleteImg/:nombre', deleteImage)





module.exports = router;