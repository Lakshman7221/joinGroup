const mongoose = require("mongoose");

var employe_Schema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    age: {
      type: String,

    },
    location: {
      type: String,
    },
    phone: {
      type: String,
    },
    // image: {
      // type: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("employe_Schema", employe_Schema);
