import Menubar from "./Menubar"
import Profile from "./Profile"

const Header = () => {
  return (
    <div className=" w-full bg-transparent px-10 py-5  flex justify-between z-10 absolute top-0 left-0">
        <Menubar/>
        <Profile/>
    </div>
  )
}

export default Header