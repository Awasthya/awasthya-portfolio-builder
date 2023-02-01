export const initialState =  {
    token: localStorage.getItem('jwtoken'),
    isAuthenticated: localStorage.getItem('jwtoken') ? true : false, // or just !!localStorage.getItem('token')
    isLoading: false,
    isRegistered: false
 }
export const reducer = (state, action) => {
    if (action.type === "USER") {
        return action.payload; 
    } 

    return state;
}