const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
// var cors_proxy = require("cors");

// app.use(cors());

app.use(cors({ origin: "http://192.168.56.1:3000" }));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "*",
//     "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json());

const authRoute = require("./route/auth");
const verifyToken = require("./route/varifyToken");

app.get("/", (req, res) => {
  res.send("Welcome to the auth system");
});

app.get("/api/users/profile", verifyToken, (req, res) => {
  res.send({ success: true, data: req.user });
  // res.send("users profile");
});

app.use("/api/users", authRoute);

require("dotenv").config();

var host = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

// console.log("ENV STR ----->", process.env.DB_USER);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@home-list-auth.gkw3i5z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  })
  .catch((err) => console.log(err));

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@home-list-auth.gkw3i5z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     cors_proxy
//       .createServer({
//         originWhitelist: [], // Allow all origins
//         requireHeader: ["origin", "x-requested-with"],
//         removeHeaders: ["cookie", "cookie2"],
//       })
//       .listen(PORT, host, function () {
//         console.log("Running CORS Anywhere on " + host + ":" + PORT);
//       });
//   })
//   .catch((err) => console.log(err));

// mongoose.connect(
//   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@home-list-auth.gkw3i5z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
//     }
//   }
// );

mongoose.set("autoIndex", false);
mongoose.set("strictQuery", false);
