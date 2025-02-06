import mongoose from "mongoose";

// ===== Database Connection =====
export const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://nhmnazmul22:nhmnazmul22@cluster0.mnssu.mongodb.net/nextjs-blog-app"
    )
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log(`Database Connection Error: ${err.toString()}`);
    });
};
