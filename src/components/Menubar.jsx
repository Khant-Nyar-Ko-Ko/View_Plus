
const Menubar = () => {

    

  return (
    <div className=" flex gap-5 items-center">
      <h1 className="text-primary font-bold text-2xl cursor-pointer select-none">ViewPlus</h1>
      <div className=" flex gap-5">
        <p className=" text-sm text-white cursor-pointer select-none">Home</p>
        <p className=" text-sm text-white cursor-pointer select-none">TV Shows</p>
        <p className=" text-sm text-white cursor-pointer select-none">Movies</p>
        <p className=" text-sm text-white cursor-pointer select-none">New & Popular</p>
        <p className=" text-sm text-white cursor-pointer select-none">My List</p>
      </div>
    </div>
  );
}

export default Menubar