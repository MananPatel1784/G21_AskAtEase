import "./App.css";

import SignUp from "../src/Components/LoginSignUp/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Leftpart from "./Components/mainleftpart";
import Gemini from "./Components/Gemini";
import ProfilePage from "./Components/ProfilePage";
import AddPost from "./Components/AddPost";
import MainComponent from "./Components/maincomponent";
import Header from "./Components/MainHeader";
// import QuestionSidebar from "./Components/QuestionsSidebar"
import AnswerPage from "./Components/Answerpage";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import QuestionsAndAnswers from "./Components/QuestionAnswer";
import Login from "./Components/LoginSignUp/Login";
import Settingsbutton from "./Components/settingsbutton";
import SettingsPage from "./Components/SettingsPage";
// import WidgetContent from './Components/WidgetContent';


function App() {
  return (
    <>
    
      <div>
        {/* <Login />  */}
        {/* <SignUp /> */}
        {/* <Sidebar /> */}
          
        {/* <ProfilePage/> */}
        {/* <MainComponent/>
        <AnswerPage/> */}
        {/* <QuestionSidebar/> */}
        {/* <Leftpart/>  */}
        {/* <Login/>  */}
        {/* <SignUp />  */}
        {/* <Questionsforyou /> */}
         <Routes>
              <Route path="/" element={<MainComponent />}/>
              <Route path="Answer" element={<AnswerPage/>}/> 
              <Route path="ReturnHome" element={<MainComponent/>}/>
               <Route path="/signup" element={<SignUp />} />
              <Route path ="/login" element={<Login/>}/> 
               <Route path="/gemini" element={<Gemini />} /> 
               <Route path="questions-and-answers" element={<QuestionsAndAnswers/>}/>
               <Route path="GoToSettings" element={<SettingsPage/>}/>
               <Route path="CheckProfile" element={<ProfilePage/>}/>
          </Routes>  
        </div>
    </>
  );
};
export default App;
