// Serwer Node.js z MongoDB
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const IconModel = require("./models/icons");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://kxczmxr:kxczmxr@project.wcxw4rb.mongodb.net/multisub?retryWrites=true&w=majority"
);

app.get("/getIcon", (req, res) => {
  IconModel.find()
    .then((icons) => res.json(icons))
    .catch((err) => res.json(err));
    
});
app.post("/updateIcons", async (req, res) => {
  try {
    const { iconId, isactive } = req.body;
    // Zmiana stanu isactive na przeciwny w bazie danych
    const updatedIcon = await IconModel.findByIdAndUpdate(iconId, {
      isactive: isactive,
    })

    console.log("Icon state updated successfully!", updatedIcon);
    IconModel.findById(iconId).exec().then(result => console.log(result));
    res.status(200).send("Icon state updated successfully!");
  } catch (error) {
    console.error("Error updating icon state:", error);
    res.status(500).send("Error updating icon state");
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
