import "./App.css";

import SignUp from "../src/Components/LoginSignUp/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Leftpart from "./Components/mainleftpart";
import Gemini from "./Components/Gemini";
import ProfilePage from "./Components/ProfilePage";
import AddPost from "./Components/AddPost";
import MainComponent from "./Components/maincomponent";
import Header from "./Components/MainHeader";
import QuestionSidebar from "./Components/QuestionsSidebar"
import AnswerPage from "./Components/Answerpage";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import QuestionsAndAnswers from "./Components/QuestionAnswer";
import Login from "./Components/LoginSignUp/Login";
import Test from "./Components/Test";
import QuestionAnswer from "./Components/QuestionAnswer";
import Comments from "./Components/comments/Comments"
// import WidgetContent from './Components/WidgetContent';


function App() {
  return (
    <>
    
      <div>
        {/* <Login />  */}
        {/* <SignUp /> */}
        {/* <Sidebar /> */}
          
        {/* <ProfilePage/> */}
        {/* <MainComponent/> */}
        {/* <AnswerPage/> */}
        {/* <QuestionSidebar/> */}
        {/* <Leftpart/>  */}
        {/* <Login/>  */}
        {/* <SignUp />  */}
        {/* <Questionsforyou /> */}
  
        {/* <QuestionAnswer questionName="Are you testing?" /> */}
        {/* <Test/> */}
         <Routes>
              <Route path="/" element={<MainComponent />}/>
              <Route path="Answer" element={<AnswerPage/>}/> 
              <Route path="ReturnHome" element={<MainComponent/>}/>
               <Route path="/signup" element={<SignUp />} />
              <Route path ="/login" element={<Login/>}/> 
               <Route path="/gemini" element={<Gemini />} /> 
               <Route path="/questions-and-answers" element={<QuestionAnswer/>}/>
               <Route path='/test' element ={<Test/>}/>
          </Routes>  
          {/* <Comments /> */}

        </div>
    </>
  );
};
export default App;
