const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../views/ludoteca.html'));
});

router.get('/detalles',(req,res) =>{
    res.sendFile(path.join(__dirname,'../views/detalle.html'));
});

module.exports = router;