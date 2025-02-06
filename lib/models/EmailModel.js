import mongoose from "mongoose";

// Define Data Schema
const DataSchema = new mongoose.Schema({
  email: { type: String, require: true },
  date: { type: Date, default: Date.now() },
});

// Define Mode
const EmailModel =
  mongoose.models.emails || mongoose.model("emails", DataSchema);

// Export Model
export default EmailModel;
