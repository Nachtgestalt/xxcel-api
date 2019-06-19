import path from "path";

module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log('Server on port', app.get('port'));
        console.log(path.join(__dirname));
    });
};
