import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const reviewSchema = new mongoose.Schema(
	{
		productId: {
			type: Number,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		user: {
			type: ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
