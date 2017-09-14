// auth.js
var passport = require("passport");  
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var users = require("./users.js");  
var cfg = require("./config.js");   
var params = {  
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromHeader('token')
};

// TODO - here we would check for the user in the DB 
// and also check that the password and username in the request were correct

module.exports = function() { 
    console.log('in auth js')
    passport.use(new JwtStrategy(params, function(payload, done) {
        console.log('in auth, payload is', payload)
        var user = users[payload.id - 1] || null;
        if (user) {
            console.log('returning user', user)
            return done(null, {
                id: user.id
            });
        } else {
            console.log('returning user not found')
            return done(new Error("User not found"), null);
        }
    }));
    return {
        initialize: function() {
            console.log('in init')
            return passport.initialize();
        },
        authenticate: function() {
            console.log('in authenticate')
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};