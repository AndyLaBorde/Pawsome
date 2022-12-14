const router = require("express").Router();
const { User, Comment, Post } = require("../models");
// TODO: Import the custom middleware

// GET all posts for homepage
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"]
                },
                { model: Comment,
                attributes: ["text"],
            },
            ],
        });
        const posts = postData.map((post) =>
        post.get({ plain: true})
        );
        res.render('post', {
            posts, 
            loggedIn: req.session.loggedIn 
        });
        // res.status(200).json(postData);
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

// get single post

// create new popst

//update post

// delete post





// check if is follower 

//

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );

//     res.render("homepage", {
//       galleries,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one follower
// // TODO: Replace the logic below with the custom middleware
// router.get("/follower/:id", async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect("/login");
//   } else {
//     // If the user is logged in, allow them to view the gallery
//     try {
//       const dbGalleryData = await Gallery.findByPk(req.params.id, {
//         include: [
//           {
//             model: Painting,
//             attributes: [
//               "id",
//               "title",
//               "artist",
//               "exhibition_date",
//               "filename",
//               "description",
//             ],
//           },
//         ],
//       });
//       const gallery = dbGalleryData.get({ plain: true });
//       res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

// // GET one painting
// // TODO: Replace the logic below with the custom middleware
// router.get("/post/:id", async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect("/login");
//   } else {
//     // If the user is logged in, allow them to view the painting
//     try {
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

// //login page
// //http://localhost:3001/login
// router.get("/login", (req, res) => {
//   //if logged in redirect to home
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
//   res.render("login");
// });

module.exports = router;
