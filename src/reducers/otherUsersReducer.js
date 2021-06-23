const initialState = {
    otherUsersInfo : {}
}

const SET_OTHER_USERS_INFO = 'SET_OTHER_USERS_INFO';

function otherUsersReducer(state = initialState, action = {}){

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
        case SET_OTHER_USERS_INFO: {
            const { otherUsersInfo } = payload;
            state = {
                ...state,
                otherUsersInfo
            }
        }
        default:
            return state;
    }

}

export function getOtherUsersInfo(){
    return dispatch => dispatch(
        setOtherUsersInfo({
            name: 'Some Other Guy',
            age: '00',
            goal: 'Not a clue'
        })
    );
}

export function setOtherUsersInfo(otherUsersInfo){
    return{
        type: SET_OTHER_USERS_INFO,
        payload: {
            otherUsersInfo
        }
    }
}

export default otherUsersReducer;