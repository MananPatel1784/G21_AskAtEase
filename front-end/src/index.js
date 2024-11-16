
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Provider } from "react-redux";
// import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
// import store from "./Components/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <BrowserRouter>
            <App />
    
    </BrowserRouter>

//   <BrowserRouter>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </BrowserRouter>

);
