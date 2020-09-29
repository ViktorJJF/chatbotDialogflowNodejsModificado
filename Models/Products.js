const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    price: Number,
    img: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
