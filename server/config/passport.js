const User = require("../models/userSchema");

/**
 * Local strategy : user can login by using email and password
 * npm package: passport-local
 */
const LocalStrategy = require("passport-local").Strategy;

/**
 * Third Party Authentication(Facebook, Github, Google..)
 */

// Github
const GithubStrategy = require("passport-github").Strategy;

// Facebook
const FacebookStrategy = require("passport-facebook").Strategy;

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // local check of auth.
  passport.use(
    new LocalStrategy({ username: "username" }, function (
      username,
      password,
      done
    ) {
      User.findOne({ username: username }, (err, user) => {
        if (err) return done(err);
        if (!user) {
          return done(null, false);
        }
        if (password != user.password) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );

  // Github Strategy
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne({ github_id: profile.id }, (err, user) => {
          if (err) return done(err);

          if (user) {
            return done(null, user);
          } else {
            let newUser = new User({
              github_id: profile.id,
            });
            newUser.save((err, doc) => {
              return done(null, doc);
            });
          }
        });
      }
    )
  );

  // Facebook Strategy
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne({ facebook_id: profile.id }, (err, user) => {
          if (err) return done(err);

          if (user) {
            return done(null, user);
          } else {
            let newUser = new User({
              facebook_id: profile.id,
            });
            newUser.save((err, doc) => {
              return done(null, doc);
            });
          }
        });
      }
    )
  );
};
