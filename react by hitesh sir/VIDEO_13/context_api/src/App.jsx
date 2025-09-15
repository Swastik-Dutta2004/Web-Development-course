import { useState } from "react";
import UserContextPorvider from "./Context/UserContextProvider";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextPorvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 flex flex-col items-center justify-center p-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10 text-center drop-shadow">
          Stay Focused And Consistent 🚀
        </h1>

        {/* Login + Profile Section */}
        <div className="grid gap-8 w-full max-w-3xl sm:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
            <Login />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
            <Profile />
          </div>
        </div>
      </div>
    </UserContextPorvider>
  );
}

export default App;
