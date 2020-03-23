const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

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
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        const userData = {
            email: profile.emails[0].value,
            name: profile.displayName,
            token: accessToken
        };
   done(null, userData);
  }
 )
);