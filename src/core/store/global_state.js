import React from "react";
import PropTypes from "prop-types";
// Set up global contexts
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();
// Actions
export const SET_THEME = "SET_THEME";


// Reducer
export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_THEME: {
            if (typeof payload === "boolean")
                return {
                    ...state,
                    isThemeDark: payload
                };
            else return state;
        }
        default:
            return state;
    }
};

function GlobalState(props) {
    const { initialState, dispatch } = props;
    return (
        <GlobalStateContext.Provider value={initialState}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {props.children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
}

GlobalState.propTypes = {
    initialState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default GlobalState;