const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv-safe').config({
    allowEmptyValues: true
  });
  
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GCLI_KEY,
        clientSecret: process.env.GS_KEY,
        callbackURL: "http://www.example.com/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        const userData = {
            email: profile.emails[0].value,
            name: profile.displayName,
            token: accessToken
        };
   done(err, userData);
  }
 )
);