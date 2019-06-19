import models from '../database/models';

module.exports = app => {
    app.route('/users')
        .get((req, res) => {
        models.User.findAll({})
            .then(
                result => res.json(result)
            )
            .catch(error => {
                res.status(412).json({msg: error.message})
            })
    })
    .post((req, res) => {
        console.log(req.body);
        models.User.create(req.body)
            .then( result => {
                res.json(result)
            })
            .catch(error => {
                res.status(412).json({
                    msg: error.message
                });
            });
    })
    
};
