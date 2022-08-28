const express = require("express"); 
const app = express(); 
app.get("/", (req, res) =>{
    res.send("Bienvenidos a mi Mundo"); 
}); 
app.listen(3000, () =>
console.log("Servidor Corriendo")); 

