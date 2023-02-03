import React, { useReducer } from "react";

const initialState = 0;
const myContext = React.createContext();

function reducer(state, action) {

    console.log(action);
    switch (action.type) {
        case "reset":
            return initialState;
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "login":
            return { user: { loginStatus: true } };
        case "test":
            // let newdata = JSON.parse(JSON.stringify(state));
            let newdata = state;
            newdata.currentMenu = { parent: "", current: "" }
            return newdata;
        default:
            return state;
    }
}

const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        user: { loginStatus: false }
    });
    return (
        <myContext.Provider value={{ state, dispatch }}>
            {props.children}
        </myContext.Provider>
    );
};

export { reducer, myContext, ContextProvider };