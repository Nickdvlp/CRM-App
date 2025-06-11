import { useUser } from "@clerk/clerk-react"; // or your auth provider

import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded)
    return (
      <div className="h-screen flex justify-center items-center bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return isSignedIn ? children : <Navigate to="/" />;
};
