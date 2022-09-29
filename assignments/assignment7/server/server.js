const express = require("express");
const app = express();
const cors = require('cors')
const { ObjectId } = require("mongodb");
const MongoConnectionClient = require("mongodb").MongoClient;

MongoConnectionClient.connect("mongodb://localhost:27017")
  .then((client) => {
    console.log("Successfully connected to the DB!");

    app.use(cors());
    app.use(express.json());

    app.listen(8080, () => {
      console.log("server started");
    });

    app.get("/user/:id", (req, res) => {
      const userId = req.params.id;
      client
        .db("usersDB")
        .collection("users")
        .find({ _id: ObjectId(userId) })
        .toArray()
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          console.error("Couldn't get this User!" + err);
        });
    });

    app.get("/allUsers", (req, res) => {
      client
        .db("usersDB")
        .collection("users")
        .find()
        .toArray()
        .then((users) => {
          res.send(users);
        })
        .catch((err) => {
          console.error("Couldn't get a full list of all users!" + err);
        });
    });

    app.post("/user", (req, res) => {
      const id = req.body._id;
      delete req.body._id;
      client
        .db("usersDB")
        .collection("users")
        .updateOne({ _id: ObjectId(id) }, { $set: req.body })
        .then(() => {
          res.send("User-Info successfully update!");
        })
        .catch((err) => {
          console.log("User-Info update failed" + err);
        });
    });

    app.post("/newUser", (req, res) => {
      client
        .db("usersDB")
        .collection("users")
        .insertOne(req.body)
        .then((user) => {
          client
            .db("usersDB")
            .collection("users")
            .findOne({ _id: ObjectId(user.insertedId) })
            .then((user) => {
              res.send(user);
            })
        })
        .catch((err) => {
          console.log("User-Info update failed" + err);
        });
    });

    app.delete("/user:id", (req, res) => {
      client
        .db("usersDB")
        .collection("users")
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(() => {
          res.send("User-Info successfully deleted!");
        })
        .catch((err) => {
          console.log("User-Info failed to delete" + err);
        });
    });

    app.get("/courses", (req, res) => {
      client
        .db("usersDB")
        .collection("courses")
        .find()
        .toArray()
        .then((courses) => {
          res.send(courses);
        })
        .catch((err) => {
          console.error("Couldn't get a full list of all courses!" + err);
        });
    });

    app.post("/newCourse", (req, res) => {
      client
        .db("usersDB")
        .collection("courses")
        .insertOne(req.body)
        .then((course) => {
          client
            .db("usersDB")
            .collection("courses")
            .findOne({ _id: ObjectId(course.insertedId) })
            .then((course) => {
              res.send(course);
            })
        })
        .catch((err) => {
          console.log("Saving new course failed" + err);
        });
    });

    app.get("/courses/:id", (req, res) => {
      const userId = req.params.id;
      client
        .db("usersDB")
        .collection("courses")
        .find({ _id: ObjectId(userId) })
        .toArray()
        .then((course) => {
          res.send(course);
        })
        .catch((err) => {
          console.error("Couldn't get this course!" + err);
        });
    });
  })
  .catch((err) => {
    console.error("Couldn't connect to the MongoDB! " + err);
  });
