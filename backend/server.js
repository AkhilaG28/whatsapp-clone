const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/routes");
const Pusher = require("pusher");

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

const pusher = new Pusher({
  appId: "1122645",
  key: "5de94863b60f7f8b80cb",
  secret: "b8c27da6249bd1f760a4",
  cluster: "ap2",
  useTLS: true,
});

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Database is successfully connected");

  const msgsCollection = db.collection("WhatsappMessage");
  const changeStream = msgsCollection.watch();

  changeStream.on("change", (change) => {
    console.log("Change is observed", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        // timestamp: messageDetails.timestamp
      });
    } else console.log("Error triggering Pusher");
  });
});

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
