const mongoose = require("mongoose");

const pointsTableSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
});

const PointsTable = mongoose.model("PointsTable", pointsTableSchema);

module.exports = PointsTable;