var passport = require('passport');

exports.authenticate = function(req, res, next) {
    var auth = function(req, res, next) {
        var auth = passport.authenticate('local', function(err, user) {
            if(err) {return net(err);}
            if(!user) { res.send({success:false});}
            req.logIn(user, function(err) {
                res.send({success:true, user: user});
            });
        });
        auth(req, res, next);
    };
}; 