import { UserType } from "../../types/Type";
import { getUser } from "../../API/getUser";
// import { Dispatch } from "redux";

export const addUserToStore = () => async (dispatch) =>{
    try { 
        const data = await getUser();
        dispatch({ type : "ADD_USER",
                   payload : data })
    }
    catch(err){
        console.log(err);
    }
};

export const logout = () => async(dispatch)=>{
    try{
        dispatch({type : "LOG_OUT"});
    }catch(error){console.log(error);}
};