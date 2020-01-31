module.exports = (app, db) => {
    app.post('/post', async (req, res) => {
        let post = new db.Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
        })
        await post.save()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })
    app.get('/posts', async (req, res) => {
        await db.Post.find()
            .select('_id title content').exec()
            .then(data => {
                const array =[]
                posts.forEach(element => {
                    const postSerialize = {
                        _id:element._id.toString(),
                        type:'post',
                        attributes:{
                            titre:element.title,
                            content:element.content
                        }
                        /*,relationships:{
                            author:{
                                data:{
                                    _id:element.author.toString(),
                                    type:'author'
                                }
                            }
                        }*/
                    }
                    array.push(postSerialize)
                });
                res.status(200).json(array)
            })
        .catch(err => res.status(400).json(err))
    })
}
