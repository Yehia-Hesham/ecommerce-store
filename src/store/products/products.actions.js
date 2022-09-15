import ActionTypes from "./products.types";
import productsService from "./products.service";

export const readProductsStart = () => ({
    type: ActionTypes.READ_PRODUCTS_START,
});

export const readProductsSuccess = (products) => ({
    type: ActionTypes.READ_PRODUCTS_SUCCESS,
    payload: products,
});

export const readProductsFailure = (errorMessage) => ({
    type: ActionTypes.READ_PRODUCTS_FAILURE,
    payload: errorMessage,
});

export const readProducts = () => async (dispatch) => {
    dispatch(readProductsStart());
    try{
        const response = await productsService.readProducts();
        console.log("Read products")
        dispatch(readProductsSuccess(response.data))
    }
    catch (error){
        dispatch(readProductsFailure(error));
    }
}

// export const readProductsTemp = (data) => {
//     dispatch(readProductsStart());
//     try{
//         dispatch(readProductsSuccess(data))
//     }
//     catch (error){
//         dispatch(readProductsFailure(error));
//     }
// }
