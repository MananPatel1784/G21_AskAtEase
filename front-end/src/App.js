import "./App.css";
import Login from "./Components/LoginSignUp/Login";
import SignUp from "./Components/LoginSignUp/SignUp"; // It's fine to import but not necessary unless you use it
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";
import Gemini from "./Components/Gemini";
// import WidgetContent from './Components/WidgetContent';
import Gemini from "./Components/Gemini"
function App() {
  return (<>
      <div>
        {/* <Sidebar /> */}
       {/* <Gemini/> */}
       {/* <Login></Login> */}
       {/* <Login/> */}
       <SignUp/>
      </div>
    </>
  );
}

export default App;
