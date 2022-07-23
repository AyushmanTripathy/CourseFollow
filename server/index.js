import express from "express"; //backend
import mongoose from "mongoose"; //connect to dbd
import cors from "cors"; //establish connection
import morgan from "morgan"; //middleware

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const URL =
  "mongodb+srv://sup:sup123@courseappdb.fdzyr.mongodb.net/?retryWrites=true&w=majority";

const PORT = 5000;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("starting express server");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

mongoose.set("useFindAndModify", false);
