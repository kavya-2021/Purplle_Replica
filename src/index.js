const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

app.use(express.json());

const connect = require('./configs/db')

app.listen( process.env.PORT || 4908 ,async()=>{
    await connect();
    console.log("Listening to port 4905");
})


// Express body parser
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index.ejs", {});
});


// const Homepage = require('./controllers/home.controller')
// // app.use("/" , Homepage);


// // Passport Config
// require('./configs/passport')(passport);

// // DB Config
// const db = require('./configs/keys').mongoURI;

// // Express session
// app.use(
//     session({
//       secret: 'secret',
//       resave: true,
//       saveUninitialized: true
//     })
//   );

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect flash
// app.use(flash());



// // Global variables
// app.use(function(req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
//   });
  
//   // Routes
//   app.use('/', require('./controllers/auth.controller.js'));
//   app.use('/users', require('./controllers/users.controller.js'));
  



// // crud for the ejs control of facemakeup products

const faceController = require('./controllers/face.controller');

app.use("/faceproducts",faceController);

// // crud for the ejs control of hairCare products

// const hairController = require('./controllers/hair.controller');

// app.use("/hairproducts",hairController);

// // crud for the ejs control of Skin-Care products

// const skinController = require('./controllers/skin.controller');

// app.use("/skinproducts",skinController);  

// // crud for the ejs control of Wish List products

// const wishController = require('./controllers/wish.controller');

// app.use("/wishlist",wishController);

// // crud for the ejs control of all products

// const productController = require('./controllers/product.controller');

// app.use("/products",productController);

// const cartController = require('./controllers/cart.controller');

// app.use("/cart",cartController);


module.exports = app
