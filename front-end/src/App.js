import "./App.css";
import Login from "./Components/LoginSignUp/Login";
import SignUp from "./Components/LoginSignUp/SignUp"; // It's fine to import but not necessary unless you use it
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
