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
const create = (req, res) => {
    const id = postsData[postsData.length - 1].id + 1;
    const newPost = {
        id: id,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    }
    postsData.push(newPost);
    res.status(201).json(newPost);
}


// update (replace)
/*router.put('/:id', function(req, res) {
    res.send('Replace post' + req.params.id); 
});*/
const update = (req, res) => {
    const id = Number(req.params.id);
    const post = postsData.find((post) => post.id === id);

    if(!post) { // see slide 20
        res.status(404)
        return res.json({
            error: "Not found",
            message: "Post not found"
        })
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags; 

    res.json(post);
}


// modify (edit)
/*router.patch('/:id', function(req, res) {
    res.send('Edit post' + req.params.id);
});*/

const modify = (req, res) => {
    const id = Number(req.params.id);
    const post = postsData.find((post) => post.id === id);

    if(!post) { // see slide 20
        res.status(404)
        return res.json({
            error: "Not found",
            message: "Post not found"
        })
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.image = req.body.image || post.image;
    post.tags = req.body.tags || post.tags; 

    res.json(post);
}


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
    create,
    update,
    modify,
    destroy
}