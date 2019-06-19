module.exports = app => {
    // const users = app.db.User;
    app.route('/users')
        .get((req, res) => {
            console.log(app.db);
        // users.findAll({})
        //     .then(
        //         result => res.json(result)
        //     )
        //     .catch(error => {
        //         res.status(412).json({msg: error.message})
        //     })
    })
    .post((req, res) => {
        console.log(req.body);
        // users.create(req.body)
        //     .then( result => {
        //         res.json(result)
        //     })
        //     .catch(error => {
        //         res.status(412).json({
        //             msg: error.message
        //         });
        //     });
    })
    
};
