import { createStore } from redux;

const initialState = {
    logged:false,

};


const reductor = (state = initialState, action) => {
    if (action.type === "USER.LOGGED") {
        return {
            ... state,
            logged: true,
        };
    }

    if (action.type === "USER.LOGOUT") {
        return {
            ...state,
            logged: false,
        }
    }

}


export default createStore(reductor);