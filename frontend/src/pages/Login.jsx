
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-md shadow-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Log in to your account
        </h2>
        <form>
        
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
          </div>
         
          <div className="mb-6">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
          >
            Log in
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          New here?{" "}
          <Link to="/register" className="text-black font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
