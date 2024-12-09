import React, { useState } from "react";
import SignUpForm from "./componenets/SignUpForm";
import LoginForm from "./componenets/LoginForm";

const App: React.FC = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignOut = () => {
    localStorage.clear();
    setIsSignedUp(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">React Auth Forms</h1>
      {!isSignedUp ? (
        <SignUpForm onSuccess={() => setIsSignedUp(true)} />
      ) : (
        <>
          <LoginForm />
          <button
            onClick={handleSignOut}
            className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default App;
