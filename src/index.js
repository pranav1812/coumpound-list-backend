const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Server up and running!");
});

app.use("/compounds", require("./routes/counpounds.route"));

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
