import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt"; // Ensure bcrypt is imported
import UserModel from "./Models/Users.js";
import ProductModel from './Models/Posts.js';

const app = express();
app.use(cors());
app.use(express.json());

// Register User Route
app.post("/registerUser", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      firstname,
      lastname,
      email,
      phone,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ user: newUser, message: "User added successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to register user", error: error.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { remail, rpassword } = req.body;
    const user = await UserModel.findOne({ email: remail });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const isMatch = await bcrypt.compare(rpassword, user.password);
    if (isMatch) {
      res.json({ user, message: "Login successful." });
    } else {
      res.status(401).json({ message: "Authentication failed." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Test Register User Route
app.post("/registerUserTest", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body;
    const hpassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      firstname,
      lastname,
      email,
      phone,
      password: hpassword,
    });
    await user.save();
    res.send({ user: user, msg: "Added." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Test Login Route
app.post("/loginTest", async (req, res) => {
  try {
    const { remail, rpassword } = req.body;
    const User = await UserModel.findOne({ email: remail });
    if (!User) {
      return res.status(500).json({ msg: "User not found.." });
    } else {
      const passwordMatch = await bcrypt.compare(rpassword, User.password);
      if (passwordMatch) {
        return res.status(200).json({ User, msg: "Success.." });
      } else {
        return res.status(401).json({ msg: "Authentication Failed.." });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Get Products Route
app.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

// Delete Product Route
app.delete("/delProduct/:prodid", async (req, res) => {
  try {
    const prodid = req.params.prodid;
    await ProductModel.findOneAndDelete({ _id: prodid });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Update Product Route
app.post('/updateProduct', async (req, res) => {
  try {
    const { _id, prodname, prodprice } = req.body;
    const product = await ProductModel.findOne({ _id });
    if (product) {
      product.prodname = prodname;
      product.prodprice = prodprice;
      await product.save();
      res.send({ product: product, msg: 'Product updated successfully.' });
    } else {
      res.status(404).send({ msg: 'Product not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the product.' });
  }
});

// MongoDB Connection String
const conn = "mongodb+srv://admin:1234@cluster0.a0lgnm6.mongodb.net/Garage?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(error => console.error("MongoDB connection error:", error));

app.listen(3002, () => {
  console.log("Server Connected..");
});
