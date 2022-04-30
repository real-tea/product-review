import { NextApiRequest , NextApiResponse } from "next";
import Review from "../../Schema/Review";
import User from "../../Schema/User";
import db from "../../DB/database";
import type { UserType } from "../../types/Type";
db();

const getComments = async(req : NextApiRequest, res : NextApiResponse)=>{
    const {pid} = req.query;
    const reviews = await Review.find({ productId : pid }).populate("user");
    res.json(reviews);
    res.end();

}

const postComments = async(req : NextApiRequest, res : NextApiResponse)=>{
    const {pid} = req.query;
    const incomingUser : UserType = req.body.user;
    const user = new User({
        name : {
            firstName : incomingUser.name.firstName,
            SecondName : incomingUser.name.SecondName,
        },
        imageUrl : incomingUser.imageUrl
    });

    await user.save();
    const review = new Review({
        productId: pid,
        review : req.body.review.review,
        user : user._id, 
    });
    await review.save();
    const retValue = await review.populate("user");
    res.json(retValue);
    res.end();
}

export default async(req : NextApiRequest, res : NextApiResponse)=>{
    switch(req.method){
        case "GET":
            await getComments(req,res);
            break;
        case "POST":
            await postComments(req,res);
            break;
        default :
            break;
    }
}