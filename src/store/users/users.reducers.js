// import UserActionTypes from "./users.types";

// const initialState = {
//     users: [
//        { email: 'yehia.yehia@yehia.com',
//         password: 'yehia'},
//         {email: 'ehssan.ehssan@ehssan.com',
//         password: 'ehssan'}
//     ],
//     loggedin: false,
//     currentUser: null
// }

// const userReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case UserActionTypes.LOGOUT_USERS_START: 
//         console.log("Read products start")
//             return {
//                 ...state,
//             }
//         case UserActionTypes.LOGOUT_USERS_SUCCESS:
//             console.log("Read Products Success!")
//             console.log("data: ",action.payload)
//             return {
//                 ...state,
//                 loggedin: false,
//                 currentUser: null
//             }
//         case UserActionTypes.LOGOUT_USERS_FAILURE:
//             return {
//                 ...state,
//                 errorMessage: action.payload
//             }
//         case UserActionTypes.LOGIN_USERS_START: 
//         console.log("Read products start")
//             return {
//                 ...state,
//             }
//         case UserActionTypes.LOGIN_USERS_SUCCESS:
//             console.log("Read Products Success!")
//             console.log("data: ",action.payload)
//             return {
//                 ...state,
//                 loggedin: true,
//                 currentUser: action.payload
//             }
//         case UserActionTypes.LOGIN_USERS_FAILURE:
//             return {
//                 ...state,
//                 errorMessage: action.payload
//             }
//         case UserActionTypes.REGISTER_USERS_START: 
//         console.log("Read products start")
//             return {
//                 ...state,
//             }
//         case UserActionTypes.REGISTER_USERS_SUCCESS:
//             console.log("Read Products Success!")
//             console.log("data: ",action.payload)
//             return {
//                 ...state,
//                 users: state.users.push(action.payload)
//             }
//         case UserActionTypes.REGISTER_USERS_FAILURE:
//             return {
//                 ...state,
//                 errorMessage: action.payload
//             }
//         default:
//             return state;
//     }
//   }

//   export default userReducer;
