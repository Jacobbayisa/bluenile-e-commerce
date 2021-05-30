import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import data from "./data.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/products", async (req, res) => {
  res.send(data.products);
});

// get details of each product
app.get("/api/products/:id", (req, res) => {
  console.log("This is req params id from server" + req.params.id);
  const product = data.products.find((prod) => prod._id === req.params.id);
  if (product) {
    console.log(product);
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
