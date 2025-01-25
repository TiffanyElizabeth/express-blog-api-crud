/* Esercizio
..OK Create un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
..OK All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
..OK Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio:
Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
e via dicendo…

..OK Registrare il router dentro app.js con il prefisso posts/.

Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json
*/

const express = require('express') //importiamo Express
const router = express.Router(); // creiamo la variabile "router" 

// index
router.get('/', function(req, res) {
    res.send('List of posts');
});

// show
router.get('/:id', function(req, res) {
    res.send('Post details');
});

// create / store
router.post('/', function(req, res) {
    res.send('New post');
});

// update
router.put('/:id', function(req, res) {
    res.send('Replace post' + req.params.id); 
});

// modify
router.patch('/:id', function(req, res) {
    res.send('Edit post' + req.params.id);
});

// delete 
router.delete('/:id', function(req, res) {
    res.send('Delete post' + req.params.id);
});

// export router 
module.exports = router;