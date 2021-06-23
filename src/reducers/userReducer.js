const initialState = [];

function userReducer(state, action){
    if(typeof state === 'undefined'){
        state = {
            ...initialState
        }
    }

}

export default userReducer;