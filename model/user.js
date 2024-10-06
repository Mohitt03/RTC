// const { createHmac, randomBytes } = require("crypto");
// const { Schema, model } = require("mongoose");
// const { createTokenForUser } = require("../services/authentication");
// const { type } = require("os");

// const userSchema = new Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     salt: {
//       type: String,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     profileImageURL: {
//       type: String,
//       default: "/images/default.png",
//     },
//     role: {
//       type: String,
//       enum: ["USER", "ADMIN"],
//       default: "USER",
//     },
//   },
//   { timestamps: true }
// );