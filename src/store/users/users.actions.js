// import UserActionTypes from "./users.types";

// export const registerUserStart = () => ({
//     type: UserActionTypes.REGISTER_USERS_START,
// });

// export const registerUserSuccess = (userData) => ({
//     type: UserActionTypes.REGISTER_USERS_SUCCESS,
//     payload: userData,
// });

// export const registerUserFailure = (error) => ({
//     type: UserActionTypes.REGISTER_USERS_FAILURE,
//     payload: error,
// });

// export const loginUserStart = () => ({
//     type: UserActionTypes.LOGIN_USERS_START,
// });

// export const loginUserSuccess = (userData) => ({
//     type: UserActionTypes.LOGIN_USERS_SUCCESS,
//     payload: userData,
// });

// export const loginUserFailure = (error) => ({
//     type: UserActionTypes.LOGIN_USERS_FAILURE,
//     payload: error,
// });

// export const logoutUserStart = () => ({
//     type: UserActionTypes.LOGOUT_USERS_START,
// });

// export const logoutUserSuccess = (userData) => ({
//     type: UserActionTypes.LOGOUT_USERS_SUCCESS,
//     payload: userData,
// });

// export const logoutUserFailure = (error) => ({
//     type: UserActionTypes.LOGOUT_USERS_FAILURE,
//     payload: error,
// });

// export const registerUser = (userData)  => async (dispatch) => {
//     dispatch(registerUserStart())
//     if (!containsObject(userData, state.users)) {
//         dispatch(registerUserSuccess(userData));
//     }
//     else{
//         dispatch(registerUserFailure("Error Message: User Already in system"))
//     }
// }

// export const loginUser = (userData) => async (dispatch) => {
//     dispatch(loginUserStart())
//     if (containsObject(userData, state.users)) {
//         dispatch(loginUserSuccess(userData));
//     }
//     else{
//         dispatch(loginUserFailure("Error Message: User Not found"))
//     }
// }

// export const logoutUser = (userData) => async (dispatch) => {
//     dispatch(logoutUserStart())
//     if (true) {
//         dispatch(logoutUserSuccess(userData));
//     }
//     else{
//         dispatch(logoutUserFailure("Error Message: User Not found"))
//     }
// }


// function containsObject(obj, list) {
//     var x;
//     for (x in list) {
//         if (list.hasOwnProperty(x) && list[x] === obj) {
//             return true;
//         }
//     }

//     return false;
// }

// // export const readProductsTemp = (data) => {
// //     dispatch(readProductsStart());
// //     try{
// //         dispatch(readProductsSuccess(data))
// //     }
// //     catch (error){
// //         dispatch(readProductsFailure(error));
// //     }
// // }