import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await createUserWithEmailAndPassword(email, password);
        navigate('/home');
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsRegistering(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/home" replace={true} />}

      <main className="font-lexend flex justify-center items-center bg-gradient-to-b from-customGradient1 to-customGradient2 min-h-screen w-full p-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-8">
            {/* Left Side Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="../Assets/AskAtEase.png" // Replace with your image URL
              alt="Sign Up Illustration"
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Sign Up Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Create a New Account</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm text-center">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={isRegistering}
                className="w-full py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-200 disabled:bg-gray-400"
              >
                {isRegistering ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <div className="text-sm text-center mt-4">
              Already have an account?{' '}
              <Link to="/Login" className="text-emerald-600 font-bold hover:underline">
                Continue
              </Link>
            </div>
          </div>

          
        </div>
      </main>
    </>
  );
};

export default SignUp;
