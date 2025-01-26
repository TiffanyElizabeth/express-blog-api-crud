const postsData = require("../data/postsData");

// index - see slide 4 31-express-crud1
const index = (req, res) => {
    res.json(postsData);
}

// show see slide 15 31-express-crud1
const show = (req, res) => {
    const id = Number(req.params.id);
    const post = postsData.find((post) => post.id === id);

    if(!post) { // see slide 20
        res.status(404)
        return res.json({
            error: "Not found",
            message: "Post not found"
        })
    }

    res.json(post);
}

// create / store
/*router.post('/', function(req, res) {
    res.send('New post');
}); */


// update (replace)
/*router.put('/:id', function(req, res) {
    res.send('Replace post' + req.params.id); 
});*/


// modify (edit)
/*router.patch('/:id', function(req, res) {
    res.send('Edit post' + req.params.id);
});*/


// destroy (delete) see slide 24 of 31-express-crud1, 39min thurs 23 gennaio lesson
const destroy = (req, res) => {
    const id = Number(req.params.id);
    const post = postsData.find((post) => post.id === id);

    if(!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "not found",
            message: "post not found"
        })
    }

    postsData.splice(postsData.indexOf(post), 1); //remove post 
    console.log(postsData);
    res.sendStatus(204); //inva una risposta con uno status senza body
}

// export 
module.exports = {
    index,
    show,
    destroy
}