const express = require("express"); // import express
const app = express(); // use function express to start the appliation (web server)
const port = 3000; // port used to run the application 
const errorsHandler = require("./middleware/errorsHandler"); //import errors handler middleware 


// app = webserver, .get = il metodo http su cui voglio restituire la risposta
// il primo parametre "/" = la rotta (url) sui cui rimango in ascoloto di eventuali richieste 
// il secondo parametre e una funzione (req, res) => {} - la funzione che gestirà la richiesta da parte del cliente e restiuirà la risposta 
app.get('/', (req, res) => {
  res.send('server del mio blog') // res.send invia un contenuto testuale/html (slide 23 express intro)
});

const postsRouter = require("./router/postsRouter"); // router

app.use(express.static("public")); // middleware per file statici

app.use(express.json()); // middleware to tranform req body i)

app.use("/posts", postsRouter);

// Middleware 500 (slide 18 from 33-Express-Middlewares)
app.use(errorsHandler);

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});