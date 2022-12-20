//Reducer file = it contains the logic and calculation that needed to be performed on the state
const cart = []; //blank list or array
//Reducers returns current state and dispatch
const handleCart = (state = cart, action) => { // single state value and action contains information
    const product = action.payload; //action what reducer action it should take and payload is the data that your reducer will use to update the state
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id); // Check if product is already exist
            if (exist) {
                //Increase the Quantity
                return state.map((x) =>   // do not store duplicate value 
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x    // ..x deconstruct an array
                )

            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id)  // creates a new array filled with elements that pass a test provided by a function
            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                )
            }
            break;
        default:
            return state;
            break;
    }
}
export default handleCart;