// require('dotenv').config();
const db = require("../models");
// var keys = require("../config/keys.js");
// var books = require('google-books-search');
// var geocoder = require('google-geocoder');

// const User = require('../../models/User');

module.exports = function (app) {

    app.get("/api/users", (req, res) => {
        db.User.findAll()
            .then(users => res.json(users))
    })

    app.post("/api/users", (req, res) => {
        const newUser = new User({
            userName: req.body.userName,
            password: req.body.password
        });
        db.User.create(newUser).then(user => res.json(user))
    });
// ******************************************************************************
    // // Library API routes
    // app.get("/validate-user", function(req, res) {
    //     db.User.findAll({
    //         where: {
    //             id: req.user.id
    //         }
    //     }).then(function(dbUser) {
    //         res.json(dbUser);
    //     });
    // });

    // app.get("/check-user/:user_name", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             userName: req.params.user_name
    //         }
    //     }).then(function (dbUser) {
    //         console.log(dbUser);
    //         res.json(dbUser);
    //     });
    // });

    // app.put("/update-user/:user_name/:zip_code", function(req, res) {
    //     db.User.update({
    //         userName: req.params.user_name,
    //         zipCode: req.params.zip_code
    //       },
    //       {
    //         where: {
    //           id: req.user.id
    //         }
    //       }).then(function(dbUser) {
    //         res.json(dbUser);
    //     })
    // })

    // app.get("/logout", function (req, res) {
    //     req.logout();
    //     res.redirect('/')
    // });

    // app.get("/search/books/:query", function (req, res) {
    //     // $.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.query, function(result) {
    //     //     res.json(result)
    //     // })
    //     books.search(req.params.query, function(error, results) {
    //         if ( ! error ) {
    //             res.json(results);
    //         } else {
    //             console.log(error);
    //         }
    //     });
        
    // });

    // app.post("/book/request", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             id: req.user.id,
    //         }
    //     }).then(function (user_info) {
    //         db.Book.create({
    //             title: req.body.title,
    //             author: req.body.author,
    //             category: req.body.category,
    //             description: req.body.description,
    //             postType: "REQUEST",
    //             postStatus: "REQUESTED",
    //             thumbnail: req.body.thumbnail,
    //             ISBN: req.body.ISBN,
    //             UserId: req.user.id
    //         })
    //       .then(function(postedBook) {
    //         res.json(postedBook);
    //       });
    //     });
    // });

    // // Get route for returning posts of a specific category
    // app.get("/books/requested", function(req, res) {
    //     db.Book.findAll({
    //         where: {
    //             postType: "REQUEST",
    //             postStatus: "REQUESTED"
    //         },
    //         include: {
    //             model: db.User,
    //             attributes: ['userName', 'zipCode']
    //         }
    //     }).then(function (dbDreams) {
    //         res.json(dbDreams);
    //     });
    // });

    // //Get route for returning all offered books
    // app.get("/books/offered", function(req, res) {
    //     db.Book.findAll({
    //     where: {
    //         postType: "OFFER",
    //         postStatus: "OFFERED"
    //     },
    //     include: {
    //         model: db.User,
    //         attriubtes: ['userName', 'preferredDropAddress']
    //     }
    //     })
    //     .then(function(book_offers) {
    //         res.json(book_offers);
    //     });
    // });


    // app.post("/book/offered", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             id: req.user.id,
    //         }
    //     }).then(function (user_info) {
    //         db.Book.create({
    //             title: req.body.title,
    //             author: req.body.author,
    //             category: req.body.category,
    //             description: req.body.description,
    //             postType: "OFFER",
    //             postStatus: "OFFERED",
    //             thumbnail: req.body.thumbnail,
    //             ISBN: req.body.ISBN,
    //             UserId: req.user.id
    //         })
    //       .then(function(postedBook) {
    //         res.json(postedBook);
    //       });
    //     });
    // });


    // // Get route for returning posts of a specific category
    // app.get("/profile/requests", function(req, res) {
    //     db.Book.findAll({
    //     where: {
    //         UserId: req.user.id,
    //         postType: "REQUEST"
    //     },
    //     include: {
    //         model: db.User,
    //         attributes: ['userName', 'zipCode']
    //     }
    //     })
    //     .then(function(book_requests) {
    //         res.json(book_requests);
    //     });
    // });

    // app.get("/profile/offers", function(req, res) {
    //     db.Book.findAll({
    //     where: {
    //         UserId: req.user.id,
    //         postType: "OFFER"
    //     },
    //     include: {
    //         model: db.User,
    //         attriubtes: ['userName', 'preferredDropAddress']
    //     }
    //     })
    //     .then(function(book_requests) {
    //         res.json(book_requests);
    //     });
    // });

    // // DELETE route for deleting Dream
    // app.delete("/book/request/delete/:id", function (req, res) {
    //     db.Book.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (result) {
    //         res.json(result);
    //     });
    // });

    // app.put("/book/request/update/:id", function (req, res) {
    //     db.Book.update(
    //         {
    //         postStatus: "PENDING",
    //         respondingUser: req.user.id
    //         },
    //         {
    //         where: {
    //             id: req.params.id
    //         }    
    //     }).then(function (result) {
    //         res.json(result);
    //     });
    // });

    // app.post("/check-address", function(req, res) {
    //     var address = req.body.address;
    //     console.log(address)
    //     var geo = geocoder({
    //         key: keys.google.key
    //       });
        
    //       geo.find(address, function(err, location) {
    //        if (err) {
    //            console.log('Error: ' + err)
    //        }

    //        else if (!location) {
    //            console.log("No result")
    //        }

    //        else {
    //             res.json(location)
    //        }
           
    //       });
    // });

    // app.put("/save-address", function(req, res) {
    //     var address = req.body.address;
    //     console.log(address)
    //     var geo = geocoder({
    //         key: keys.google.key
    //       });
        
    //       geo.find(address, function(err, location) {
    //        if (err) {
    //            console.log('Error: ' + err)
    //        }

    //        else if (!location) {
    //            console.log("No result")
    //        }

    //        else {
    //         db.User.update(
    //             {
    //             preferredDropLAT: location[0].location.lat,
    //             preferredDropLNG: location[0].location.lng,
    //             preferredDropAddress: location[0].formatted_address
    //             },
    //             {
    //             where: {
    //                 id: req.user.id
    //             }    
    //         }).then(function (result) {
    //             res.json(result);
    //         });
    //        }
           
    //       });
    // });

    // app.get("/view-request/:id", function(req, res) {
    //     db.Book.findOne({
    //     where: {
    //         id: req.params.id,
    //     }
    //     })
    //     .then(function(book_requests) {
    //         res.json(book_requests);
    //     });
    // });

    // app.get("/user-info/:id", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //           id: req.params.id
    //         }
    //       }).then(function(data){
    //           res.json(data);
    //       })
    // })

};