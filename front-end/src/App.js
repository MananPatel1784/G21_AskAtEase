import './App.css';
import Login from './Components/LoginSignUp/Login';
import SignUp from './Components/LoginSignUp/SignUp'; // It's fine to import but not necessary unless you use it
import QHeader from './Components/QHeader';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <div>
      <QHeader />   
    </div>
  );
}

export default App;
