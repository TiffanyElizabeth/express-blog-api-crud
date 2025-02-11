const express = require("express"); // import express
const app = express(); // use function express to start the appliation (web server)
const cors = require("cors");
const port = 3000; // port used to run the application 
const postsRouter = require("./router/postsRouter"); // router
const errorsHandler = require("./middleware/errorsHandler"); //import errors handler middleware 
const notFound = require("./middleware/notFound"); //import not found middleware

// http://localhost:3000/


app.get('/', (req, res) => {
  res.send('server del mio blog') // res.send invia un contenuto testuale/html (slide 23 express intro)
});

app.use(express.static("public")); // middleware per file statici

app.use(express.json()); // middleware to tranform req body i)

app.use(cors({ origin: "http://localhost:5174/" }));

app.use("/posts", postsRouter);

// Middleware 500 (slide 18 from 33-Express-Middlewares)
app.use(errorsHandler);

// Middleware 404 (slide 19 from 33-Express-Middlewares)
app.use(notFound);

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});