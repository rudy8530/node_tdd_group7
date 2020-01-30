const Author = require ('../../models/author')

module.exports = (app) => {
    app.post('/author', async (req, res) => {
      var author = new Author({firstName:req.body.firstName,lastName: req.body.lastName})
      await author.save(function(err){
        if(err) console.error(err);
      })
        return res.status(200)
  });
  
 /*   app.get('/authors', async (req, res) => {
      await db.Author.findAll(
        {attributes: ['id', 'firstName', 'lastName']}
      ).then((result) => {
        return res.json(result)
      })
    })*/
  }