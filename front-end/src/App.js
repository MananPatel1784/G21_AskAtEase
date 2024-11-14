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
  );
}

export default App;
