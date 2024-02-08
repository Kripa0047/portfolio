import { useReducer } from "react";
import AppRouter from "./router/app_router";
import { BrowserRouter } from "react-router-dom";
import initialState from "./core/store/store";
import GlobalState, { reducer } from "./core/store/global_state";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalState initialState={state} dispatch={dispatch}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
