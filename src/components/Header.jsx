import Menubar from "./Menubar";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className=" w-full bg-gradient-to-b from-gray-800 to-transparent px-10 py-5  flex justify-between z-10 fixed top-0">
      <Menubar />
      <Profile />
    </div>
  );
};

export default Header;
