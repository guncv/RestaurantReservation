const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    foodtype: {
      type: String,
      required: [true, "Please add type of food"],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    province: {
      type: String,
      required: [true, "Please add a province"],
    },
    postalcode: {
      type: String,
      required: [true, "Please add a postalcode"],
      maxlength: [5, "Postalcode cannot be more than 5 digits"],
    },
    tel: {
      type: String,
    },
    picture: {
      type: String,
      required: [true, "Please add URL to restaurant picture"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// Cascade delete bookings when a restaurant is deleted
RestaurantSchema.pre("remove", async function (next) {
  console.log(`Booking being removed from restaurant ${this._id}`);
  await this.model("Booking").deleteMany({ restaurant: this._id });
  next();
});
// Reverse populate with virtuals
RestaurantSchema.virtual("bookings", {
  ref: "Booking",
  localField: "_id",
  foreignField: "restaurant",
  justOne: false,
});
module.exports = mongoose.model("Restaurant", RestaurantSchema);
