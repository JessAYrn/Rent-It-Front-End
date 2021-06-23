const initialState = {
    userInfo: {}
};

const SET_USER_INFO = 'SET_USER_INFO';

function userReducer(state = initialState, action = {}){
    if(typeof state === 'undefined'){
        state = {
            ...initialState
        }
    }

    const {
        type,
        payload
    } = action;

    switch(type){
        case SET_USER_INFO: {
            const { userInfo } = payload;
            return {
                ...state,
                userInfo
            }
        }
        default: {
            return state;
        }
    }
}

export function setUserInfo(userInfo){
    return {
        type: SET_USER_INFO,
        payload: {
            userInfo
        }
    }
}

export function getUserInfo(){
    //TODO: axios call from backend to get the userInfo. Can't do this until a backend actually exists lol
    return dispatch => dispatch(setUserInfo({
        name:'Jesse Williams',
        age: '24',
        goal: 'to rule the world! muah ha ha ha ha'
    }))
}

export default userReducer;