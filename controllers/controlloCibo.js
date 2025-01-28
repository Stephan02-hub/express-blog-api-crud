const dolci = require("../data/dolci");
const { post } = require("../routers/postRouter");
//index
const index = (req, res) => {
  let postsFiltered = dolci;
  const { tag } = req.query;
  if( req.query.tag) {
    postsFiltered = postsFiltered.filter((post) => 
      post.tags.includes(req.query.tag));
  }
  res.json(dolci);
};
//show
const show = (req, res) => {
  const  { id } = req.params;
  const post = dolci.find((post) = post.id == id);

  if(post) {
    return res.sendStatus(404);
  }
  res.json(post);
};
//create
const create = (req, res) => {
  const id = dolci[dolci.length - 1].id + 1
    const newPost = {
      id: id,
      title: req.body.title,
      content:req.body.content,
      image:req.body.image,
      tags:req.body.tags,
    }
  
    dolci.push(newPost)
  res.status(201).json(newPost);
};
//update
const update = (req, res) => {
  const  { id } = req.params;
  const post = dolci.find((post) = post.id === id);

  if(post) {
    return res.sendStatus(404);
  }

  post.title= req.body.title,
  post.content=req.body.content,
  post.image=req.body.image,
  post.tags=req.body.tags,
  res.json(post);
};

//modify
const modify = (req, res) => {
  const  { id } = req.params;
  const post = dolci.find((post) = post.id === id);

  if(post) {
    return res.sendStatus(404);
  }

  post.title= req.body.title || post.title;
  post.content=req.body.content || post.content;
  post.image=req.body.image || post.image;
  post.tags=req.body.tags || post.tags;
  res.json(post);
}
//destroy
const destroy = (req, res) => {
  const id = Number (req.params.id);
  const postIndex = controlloCibo.findIndex((post) => post.id == id)

  if(postIndex < 0) {
    return res.sendStatus(404);
  }
  controlloCibo.splice(postIndex, 1)
  res.status(204);
  console.log(dolci);
};
module.exports = { index, create, show, update,modify, destroy };

