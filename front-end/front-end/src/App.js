import './App.css';
import Gemini from './Components/Gemini';
import Login from './Components/LoginSignUp/Login';
import SignUp from './Components/LoginSignUp/SignUp'; // It's fine to import but not necessary unless you use it
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div>
      <Login />      
    </div>
  );
}

export default App;
