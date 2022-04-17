const User = require('../Models/user');
const { SECRET } = require('../Config');
const passport = require('passport');
const { initialize } = require('passport/lib');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
}

class passportManager {
    initialize() {
        passport.use(new JwtStrategy(opts, function (payload, done) {
            User.findOne(payload.id).then((user, err) => {
                console.log("Over Here 2")
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    console.log("Here");
                    return done(null, user);
                }
                return done(null, false);
            }).catch(err => {
                return done(null, false);
            });
        }))
        return passport.initialize();
    }


}


module.exports = new passportManager();




// const { SECRET } = require('../../Config/index');
// var JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;

// const opts = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: SECRET
// }

// passport.use(new JwtStrategy(opts, function (payload, done) {
//     User.findOne(payload.id).then((user, err) => {
//         console.log("Over Here 2")
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             console.log("Here");
//             return done(null, user);
//         }
//         return done(null, false);
//     }).catch(err => {
//         return done(null, false);
//     });
// }))