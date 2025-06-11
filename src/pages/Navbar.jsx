import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex font-semibold items-center text-xl justify-between p-4 bg-gray-100 ">
      <h1>Dashboard.</h1>
      <UserButton />
    </div>
  );
};

export default Navbar;
