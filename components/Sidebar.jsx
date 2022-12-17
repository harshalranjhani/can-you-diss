import SidebarMenu from "./SidebarMenu";
import Profile from "./Profile";
import Link from "next/link";
import Image from "next/image";

import { user } from "../data/user";

import triangle from "../assets/penrose-triangle.png";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-2/12 xl:w-1/4 flex flex-col items-center justify-between border-r-2 border-border-gray">
      <div>
        <div className="flex flex-col justify-center items-center">
          <Link href="/" className="hover:opacity-50 transition-all">
            <div className="hidden xl:flex text-4xl font-extrabold mt-6">
              Rap Battle
            </div>
            <div>
              <Image
                src={triangle}
                className="xl:hidden h-10 w-10"
                alt="rap battle logo"
              />
            </div>
          </Link>
        </div>
        <div className="mt-2">
          <SidebarMenu />
        </div>
      </div>
      <div>
        <Profile {...user} />
      </div>
    </div>
  );
};

export default Sidebar;
