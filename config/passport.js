const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

require('dotenv-safe').config({
    allowEmptyValues: true
});
  
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: process.env.GCLI_KEY,
            clientSecret: process.env.GS_KEY,
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        (token, refreshToken, profile, done) => {
            console.log(profile);
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};
