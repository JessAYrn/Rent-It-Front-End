const initialState = [];

function userReducer(state = initialState, action = {}){
    if(typeof state === 'undefined'){
        state = {
            ...initialState
        }
    }

}

export default userReducer;