import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import data from "./data.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/products/:id", async (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
