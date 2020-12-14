const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whatsappSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    timeStamp: {
      type: String,
    },
    received: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("WhatsappMessage", whatsappSchema);
