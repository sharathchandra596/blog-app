import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Menu from "../components/Menu";

function Navbar() {
  const user = true;
  const [menu, setMenu] = useState(true);

  const showmenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex items-center justify-between px-2 md:px-[90px] py-2 mb-10">
      <h1 className="text-lg md:text-xl font-extrabold">
        {" "}
        <Link to="/">Blog_Bazaar</Link>
      </h1>
      <div className="flex justify-center items-center gap-2">
        <p>
          <AiOutlineSearch />
        </p>
        <input
          className="w-[90px] md:w-[500px] border-b-2 outline-none"
          type="text"
          placeholder="search here"
        />
      </div>

      <div onClick={showmenu}>
        <span><IoMenu size={30}/></span>
        {menu &&<Menu user={user}/>}
      </div>

   
    </div>
  );
}

export default Navbar;
