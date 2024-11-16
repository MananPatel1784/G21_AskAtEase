import "./App.css";
import Login from "./Components/LoginSignUp/Login";
import SignUp from "./Components/LoginSignUp/SignUp"; // It's fine to import but not necessary unless you use it
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";
<<<<<<< HEAD
import Gemini from "./Components/Gemini"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default Route */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gemini" element={<Gemini />} />
      </Routes>
    </div>
=======
import Gemini from "./Components/Gemini";
import AddPost from "./Components/AddPost";
import Header from "./Components/MainHeader";
import LeftSection from "./Components/mainleftpart";
import ProfilePage from "./Components/ProfilePage";
import SettingsButton from "./Components/settingsbutton";
// import WidgetContent from './Components/WidgetContent';

function App() {
  return (
    <>
      <SettingsButton />
    </>
>>>>>>> 2a4065cf3eacab144c50d5e8a5b5cd981d2b0353
  );
};

export default App;
