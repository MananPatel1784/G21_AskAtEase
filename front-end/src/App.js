<<<<<<< HEAD
import "./App.css";
import Login from "./Components/LoginSignUp/Login";
import SignUp from "./Components/LoginSignUp/SignUp"; // It's fine to import but not necessary unless you use it
import { AuthProvider } from "./contexts/AuthContext";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";
import Gemini from "./Components/Gemini";
// import WidgetContent from './Components/WidgetContent';

function App() {
  return (
    <>
      <div>
        {/* <Sidebar /> */}
        <Gemini />
        {/* <Login></Login> */}
        {/* <Login/> */}
        {/* <SignUp /> */}
      </div>
    </>
=======
import './App.css';
import QuoraBox from './QuoraBox';  // Import QuoraBox component
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Correct path for store.js
import Login from './Components/LoginSignUp/Login';
import SignUp from './Components/LoginSignUp/SignUp';
import { AuthProvider } from './contexts/AuthContext'; // Make sure this is imported

function App() {
  return (
    <AuthProvider> {/* Wrap entire app or specific parts where authentication is needed */}
      <Provider store={store}>  {/* Wrap app with Provider to access Redux store */}
        <div>
          {/* Example conditionally rendering Login, QuoraBox, and SignUp */}
          <Login /> {/* Render Login component */}
          <QuoraBox />  {/* QuoraBox will now have access to Redux store */}
          <SignUp /> {/* Render SignUp component */}
        </div>
      </Provider>
    </AuthProvider>
>>>>>>> 7c9bbaa782ed81a6829af00d2c01110de63150fb
  );
}

export default App;
