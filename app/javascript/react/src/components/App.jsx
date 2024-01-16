import React from "react";
import ReactDOM from "react-dom/client";
import store from "../redux/store.js";
import { Provider } from "react-redux";
import MessageList from "./Greeting.jsx";

const App = ()=> {
    return(
        <>
        <div className="container">
            <MessageList/>
        </div>
        </>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>  
    </React.StrictMode>  
)

export default App;