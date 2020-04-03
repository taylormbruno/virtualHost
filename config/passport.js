const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
require("dotenv-safe").config({
  allowEmptyValues: true
});

module.exports = () => {
  passport.serializeUser((User, done) => {
    done(null, User);
  });

  passport.deserializeUser((User, done) => {
    done(null, User);
  });

  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: process.env.GCLI_KEY,
        clientSecret: process.env.GS_KEY,
        callbackURL: "http://localhost:3001/auth/google/callback"
      },
      (token, refreshToken, profile, done) => {
        const userProfile = {
          first_name: profile.name.givenName,
          last_name: profile.name.familyName,
          externalUser: true,
          externalID: profile.id
        };
        return done(null, {
          session: {
            profile: userProfile,
            token: token
          }
        });
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(
      {
        passReqToCallback: true
      },
      function(req, username, password, done) {
        // check in mongo if a user with username exists or not
        db.User.findOne({ username: username }, function(err, user) {
          // In case of any error, return using the done method
          if (err) return done(err);
          // Username does not exist, log error & redirect back
          if (!user) {
            console.log("User Not Found with username " + username);
            return done(null, false, req.flash("message", "User Not found."));
          }
          // User exists but wrong password, log the error
          if (!isValidPassword(user, password)) {
            console.log("Invalid Password");
            return done(null, false, req.flash("message", "Invalid Password"));
          }
          // User and password both match, return user from
          // done method which will be treated like success
          return done(null, user);
        });
      }
    )
  );
};
