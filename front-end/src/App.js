import './App.css';
import Login from './Components/LoginSignUp/Login';
import SignUp from './Components/LoginSignUp/SignUp'; // It's fine to import but not necessary unless you use it
import { AuthProvider } from './contexts/AuthContext';
import Widget from './Components/Widget';

function App() {
  return (
    <>
    <div>
      <SignUp />     
    </div>

    <div>
      <Widget />
      </div>
    </>
  );
}

export default App;

