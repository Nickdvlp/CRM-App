import {
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
} from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isSignedIn } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      <div className="flex justify-center pb-12 items-center h-screen bg-radial-[at_25%_25%] from-white to-zinc-700 to-75%">
        <h1 className="text-center font-bold text-3xl md:text-6xl">
          Manage Relationships. Maximize Growth.
        </h1>
      </div>
      <header className="absolute top-5 right-12 bg-black py-1 px-2 rounded-lg text-white ">
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
};

export default Home;
