const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Ads = require("./models/Ads");

app.use(cors());
app.use(express.json());

//connect to DB
mongoose
  .connect("mongodb://localhost:27017/MentorStudents", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db Connected");
  })
  .catch((e) => {
    console.log("error in connection");
  });

app.post("/", async (req, res) => {
  const AdsData = await Ads.aggregate([
    {
      $match: {
        $or: [
          { primaryText: req.body.Search },
          { headline: req.body.Search },
          { description: req.body.Search },
        ],
      },
    },
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "com",
      },
    },
  ]);
  res.json(AdsData);
});

app.listen(1337, () => {
  console.log("server started at 1337");
});
