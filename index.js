const express = require('express');
const app = express();
const port = 8000;


app.listen(port,function(err){
    if(err){console.log(`Error in port ${port}, Type of error is ${err}`); return; }

    console.log(`Running fine on port: ${port}`);
})