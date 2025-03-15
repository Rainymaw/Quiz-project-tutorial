const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
  nbConnections: {
    type: Number,
    default: 0,
  },
});

const Connections = mongoose.model("Connections", connectionSchema);

module.exports = Connections;
