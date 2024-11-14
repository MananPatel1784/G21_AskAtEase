import './App.css';
import QuoraBox from './QuoraBox';  // Import QuoraBox component
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Correct path for store.js
import Login from './Components/LoginSignUp/Login';

function App() {
  return (
    <>
      <Login /> {/* Render Login component */}
      <Provider store={store}>  {/* Wrap app with Provider to access Redux store */}
        <div>
          <QuoraBox />  {/* QuoraBox will now have access to Redux store */}
        </div>
      </Provider>
    </>
  );
}

export default App;
