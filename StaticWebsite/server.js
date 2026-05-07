const express = require('express');
const app=express();

const PORT=4000;

app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});