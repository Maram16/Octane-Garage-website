import mongoose from "mongoose";
 
const productSchema = mongoose.Schema({
    prodid: { type: String,
        required: true },
    prodname: { type: String,
        required: true },
    prodprice: { type: Number,
        required: true },
    prodimage: { type: String,
        required: true }
});
 
const ProductModel = mongoose.model("products", productSchema);
 
export default ProductModel;