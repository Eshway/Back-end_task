const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

const pointsTableRoutes = require("./src/routes/pointsTable");
const fixtureRoutes = require("./src/routes/Fixture");
const liveStreamRoutes = require("./src/routes/LiveStream");

mongoose
  .connect("mongodb://127.0.0.1:27017/eshway-task", {
    useNewUrlParser: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.use(express.json());
app.use("/api/points-table", pointsTableRoutes);
app.use("/api/fixtures", fixtureRoutes);
app.use("/api/live-streams", liveStreamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
