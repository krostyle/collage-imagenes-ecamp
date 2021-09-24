const fs = require('fs');
const path = require('path');
const expressFileUpload = require('express-fileupload');


const sendIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/formulario.html'));
}

const sendCollage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/collage.html'));
}

const saveImage = (req, res) => {
    const { posicion } = req.body;
    const { target_file } = req.files;
    target_file.mv(`./public/imgs/imagen-${posicion}.jpg`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.redirect('/formulario.html');
    });
}

const deleteImage = (req, res) => {
    const { nombre } = req.params;
    fs.unlink(`./public/imgs/${nombre}`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        return res.status(200).redirect('/collage.html');

    })
}


module.exports = {
    sendIndex,
    sendCollage,
    saveImage,
    deleteImage
}