// const express = require("express");
// const PORT = process.env.PORT || 3001;
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const IconModel = require("./models/icons");

// app.use(cors());
// app.use(express.json());
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server" });
// });

// const uri =
//   "mongodb+srv://kxczmxr:kxczmxr@project.wcxw4rb.mongodb.net/?retryWrites=true&w=majority&appName=project";

// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error(error);
//   }
// }

// connect();

// app.get("/getIcon", (req, res) => {
//   IconModel.find({})
//     .then((apps) => res.json(apps))
//     .catch((err) => res.json(err));
// });

// app.listen(PORT, () => {
//   console.log("Listening on " + PORT);
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const IconModel = require("./models/icons");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://kxczmxr:kxczmxr@project.wcxw4rb.mongodb.net/multisubdb"
);

app.get("/getIcon", (req, res) => {
  IconModel.find()
    .then((icons) => res.json(icons))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
