//Entire file by Manan
const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth2').Strategy; 

passport.serializeUser((user , done) => { 
	done(null , user); 
});

passport.deserializeUser(function(user, done) { 
	done(null, user); 
}); 

passport.use(new GoogleStrategy({ 
	clientID:process.env.CLIENT_ID, // Your Credentials here. 
	clientSecret:process.env.CLIENT_SECRET, // Your Credentials here. 
	callbackURL:"https://g21-askatease.onrender.com/auth/google/callback", 
	passReqToCallback:true
}, 
function(request, accessToken, refreshToken, profile, done) { 
	return done(null, profile); 
} 
));