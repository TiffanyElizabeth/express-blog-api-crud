/*
Esercizio : Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

.. OK Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

.. OK Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

.. OK Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

.. OK Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

.. OK Testare su postman 
- test effetuati : 1) Get + http://localhost:3000/ = "server del mio blog", 2) Get + http://localhost:3000/bacheca = array of 5 objects 

*/

// importo il modulo express installato tramite: npm install express, lines 15-30 copied from https://expressjs.com/en/starter/hello-world.html 
const express = require('express')
// utilizzo la funzione express per inizializzare il web server
const app = express()
// definisco all'interno di una costante la porta da utilizzare
const port = 3000
// importiamo il router 
const postsRouter = require('./routers/postRouter');



// app = webserver, .get = il metodo http su cui voglio restituire la risposta
// il primo parametre "/" = la rotta (url) sui cui rimango in ascoloto di eventuali richieste 
// il secondo parametre e una funzione (req, res) => {} - la funzione che gestirà la richiesta da parte del cliente e restiuirà la risposta 
app.get('/', (req, res) => {
  res.send('server del mio blog') // res.send invia un contenuto testuale/html (slide 23 express intro)
})

// chiede a express di abilitare la possibilita di leggere file statici (qui facciamo perché dobbiamo mettere le immagini) (slides 30-31 of powerpoint) - e un middleware 
app.use(express.static('public'));

// tramite la funzione use indichiamo a express che esistono nuove rotte (slide 26 express-routing)
app.use(".//postRouter", postsRouter);

// una rotta /bacheca che restituisca un oggetto json con la lista dei post (una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe))
/*
app.get('/bacheca', (req, res) => {
    res.json([ //invia i dati sotto forma di json (slide 23)
        {
            title: "ciambellone",
            content: "1 novembre 2024",
            image: 'http://localhost:3000/ciambellone.jpeg',
            tags: ["breakfast", "dessert"],
        },
        {
            title: "cracker barbabietola",
            content: "6 novembre 2024",
            image: 'http://localhost:3000/cracker_barbabietola.jpeg',
            tags: ["snack"],
        },
        {
            title: "pane fritto dolce",
            content: "10 novembre 2024",
            image: 'http://localhost:3000/pane_fritto_dolce.jpeg',
            tags: ["dessert"],
        },
        {
            title: "pasta barbabietola",
            content: "18 novembre 2024",
            image: 'http://localhost:3000/pasta_barbabietola.jpeg',
            tags: ["lunch", "dinner"],
        },
        {
            title: "torta paesana",
            content: "19 novembre 2024",
            image: 'http://localhost:3000/torta_paesana.jpeg',
            tags: ["dessert"],
        },
    ])
});
*/


// mette in ascolto sulla porta definita in precedenza il web server (la nostra app Back End)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});