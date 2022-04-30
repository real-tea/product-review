import { UserType } from "../../types/Type";

export default (user : UserType | {}={},action) => {
    switch(action.type){
        case "ADD_USER":
            return action.payload;
        case "LOG_OUT":
            localStorage.removeItem("token");
            return {};
        default :
            return user;
    }
}