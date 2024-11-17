import "./App.css";
// import Login from "./LoginSignup//LoginSignUp/Login";
// import SignUp from "../src/Components/LoginSignUp/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Leftpart from "./Components/mainleftpart";
import Gemini from "./Components/Gemini";
import Questionsforyou from "./Components/Questionsforyou";
import ProfilePage from "./Components/ProfilePage";
import AddPost from "./Components/AddPost";
import MainComponent from "./Components/maincomponent";
import Header from "./Components/MainHeader";
import QuestionSidebar from "./Components/QuestionsSidebar"
import AnswerPage from "./Components/Answerpage";
import { BrowserRouter , Routes , Route } from "react-router-dom";
// import WidgetContent from './Components/WidgetContent';


function App() {
  return (
    <>
      <div>
        {/* Login */}
        {/* SignUp */}
        {/* <Sidebar /> */}
        {/* <Gemini /> */}
        {/* <ProfilePage/> */}
        {/* <MainComponent/> */}
        {/* <AnswerPage/> */}
        {/* <QuestionSidebar/>
        <Leftpart/> */}
        {/* <Login/> */}
        {/* <SignUp /> */}


        <Routes>
              <Route path="/" element={<MainComponent />}/>
              <Route path="Answer" element={<AnswerPage/>}/> 
              <Route path="ReturnHome" element={<MainComponent/>}/>
              {/* <Route path="/signup" element={<SignUp />} />
              <Route path ="/login" element={<Login/>}/> */}
              <Route path="/gemini" element={<Gemini />} /> 

              
        </Routes>
      </div>
    </>
  );
};
export default App;
