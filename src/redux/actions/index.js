//ADD TO CART
export const addCart = (product) =>{
    return{
        type: "ADDCART",
        payload : product
    }
} 
//DELETE TO CART
export const delCart = (product) =>{
    return{
        type: "DELITEM",
        payload : product
    }
}