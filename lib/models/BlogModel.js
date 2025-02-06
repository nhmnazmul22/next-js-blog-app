// Import Mongooses
import mongoose from "mongoose";

// Define DataSchema
const DataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  authorImg: { type: String, required: true },
  data: { type: Date, default: Date.now },
});

// Define Model
const BlogModel = mongoose.models.blogs || mongoose.model("blogs", DataSchema);

// Export Model
export default BlogModel;
