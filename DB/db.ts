import mongoose from "mongoose";
function intiDb() {

	const URL = "mongodb+srv://akashDisecto:akash@cluster0.w1wyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	if (mongoose.connection.readyState) {
		// console.log("already connected");
		return;
	}
	mongoose.connect(URL);
	mongoose.connection.on("connected", () => {
		// console.log("connected to database");
	});
	mongoose.connection.on("error", () => {
		// console.log("error connecting");
	});
}

export default intiDb;
