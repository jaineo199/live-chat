import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  // other properties
}

const userSchema = new Schema<IUser>({
  name: String,
  email: String,
  // other fields
});

export default mongoose.model<IUser>("User", userSchema);
