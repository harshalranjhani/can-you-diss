import { useState } from "react";
import { NavbarIcons } from "../assets/icons";
import profilePicture from "../assets/profile_picture.svg";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const currentContext = "Home";
  const [darkTheme, setDarkTheme] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  return (
    // blur navbar after it scrolls past the input field
    // idk how to do that
    <nav className="sticky top-0 flex justify-between items-center border-b-2 border-border-gray py-3">
      <div className="ml-2 text-lg font-semibold">{currentContext}</div>
      <input
        type="text"
        name="search-field"
        // className="text-txt-white text-base mb-2 px-3 rounded-lg shadow-lg bg-bg-black border-black hover:border-jotai-green-light transition-all focus:outline-none focus:border-jotai-green-light focus:ring-1 focus:ring-black"
        className="bg-transparent border-2 border-border-gray rounded w-1/2 xl:w-1/3 p-2 hover:border-dazzled-blue transition-all focus:outline-none focus:border-dazzled-blue focus:ring-1 focus:ring-black"
        placeholder="Search Key"
        onChange={(evt) => {
          setSearchKey(evt.target.value);
        }}
      />
      <ul className="flex space-x-4">
        <li className="mr-2 flex items-center justify-center">
          <Link href={"/profile"} className="flex items-center justify-center">
            <Image
              width={20}
              height={20}
              src={profilePicture}
              className="h-[38px] w-[38px] rounded-full mr-2 hover:opacity-60 transition-opacity"
              alt="User profile"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
