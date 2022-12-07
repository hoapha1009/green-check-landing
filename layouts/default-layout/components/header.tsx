import { useState } from "react";
import { useScreen } from "../../../lib/hooks/useScreen";
import { MenuList } from "./menu";
import { Sidebar } from "./sidebar";

export function Header() {
  const screenLg = useScreen("lg");

  return (
    <header>
      <Logo />
      {screenLg && <MenuList />}
    </header>
  );
}

function Logo() {
  const screenLg = useScreen("lg");
  const [showSidebar, setShowSidebar] = useState(false);

  if (!screenLg) {
    return (
      <>
        <div className="flex items-center justify-between px-4 py-2 ">
          <img
            src="/assets/imgs/logo-ho-tieu.png"
            alt="logo-ho-tieu"
            className="object-contain h-8"
          />
          <img
            src="/assets/imgs/logo-tentamus.png"
            alt="logo-tentamus"
            className="object-contain h-7"
          />
          <img
            src="/assets/imgs/logo-green-agri.png"
            alt="logo-green-agri"
            className="object-contain h-7"
          />
        </div>
        <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-200">
          <p className="text-lg font-bold text-gray-700">Tra cứu thông tin nông nghiệp</p>
          {/* <i
            className='text-2xl text-gray-400'
            onClick={() => setShowSidebar(true)}
          >
            <RiMenu3Line />
          </i> */}
        </div>
        {showSidebar && <Sidebar />}
      </>
    );
  }

  return (
    <div className="flex items-center justify-between px-10 py-2">
      <div className="flex items-center flex-1">
        <img
          src="/assets/imgs/logo-ho-tieu.png"
          alt="logo-ho-tieu.png"
          className="object-contain pr-4 h-14"
        />
        <div className="pl-4 text-xl font-bold text-gray-800 border-l-2 border-gray-300">
          Tra cứu thông tin nông nghiệp
        </div>
      </div>
      <div className="flex items-center justify-end gap-8">
        <img src="/assets/imgs/logo-tentamus.png" alt="logo-tentamus" className="object-contain" />
        <img
          src="/assets/imgs/logo-green-agri.png"
          alt="logo-green-agri"
          className="object-contain"
        />
      </div>
    </div>
  );
}
