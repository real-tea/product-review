export default (products : [],action:any)=>{
    switch(action.type){
        case "FETCH_ALL":
            return [...action.payload];
            break;
        default : return products;
    }
};