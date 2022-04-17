import { createStore } from "redux";
import { HIDDEN_POPUP, USER_LOGGED, SHOW_POPUP,USER_LOGOUT} from "./types";

const initialState = {
    logged:false,
    isAdmin:false,
    popup: { visibility: false, text: "" },
    token: null,
    id: 0,
    name: ""
};


const reductor = (state = initialState, action) => {
    if (action.type === USER_LOGGED) {
        let oIsAdmin=false;
       if(action.payload.role=="admin")
       {
        oIsAdmin=true;

       }

        return {
            ... state,
            logged: true,
            token: action.payload.token,
            id: action.payload.id,
            name: action.payload.name,
            isAdmin: oIsAdmin
        };
    }

    if (action.type === USER_LOGOUT) {
        return {
            ...state,
            logged: false,isAdmin:false
        }
    }

    if (action.type === SHOW_POPUP) {
        return {
          ...state,
          popup: { visibility: true, text: action.payload }
        };
      }
    
    if (action.type === HIDDEN_POPUP) {
        return {
          ...state,
          popup: { visibility: false }
        };
    }
    return state;
};


export default createStore(reductor);