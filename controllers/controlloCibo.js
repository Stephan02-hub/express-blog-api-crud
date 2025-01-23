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
  res.send("Creazione del post");
};
//modify
const patch = (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
};
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
module.exports = { index, create, show, patch, destroy };

