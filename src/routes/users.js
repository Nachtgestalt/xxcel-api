import models from '../database/models';
import bcrypt from 'bcrypt';

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
            models.User.findOrCreate({
                where: {username: req.body.username},
                defaults: {
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10)
                }
            })
                .then(([user, created]) => {
                    if (created) {
                        res.status(200).json({
                            ok: true,
                            user: user.get()
                        });
                    } else {
                        res.status(412).json({
                            ok: false,
                            message: 'El usuario ya existe',
                            user: user.get()
                        });
                    }
                })
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })

};
