const express = require('express');
const { dirname } = require('path');
const path=require('path');
const app = express();
const rutaAbsoluta='./views/';
app.use(express.static('public'));
app.get('/', (req, res)=>{
    const htmlPath=path.resolve(__dirname,rutaAbsoluta+'index.html');
    res.sendFile(htmlPath)
});
app.listen(4100,()=>console.log("El servidor esta corriendo en localhost:4100"));