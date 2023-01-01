import useStore from "../Store/store";
import logo from "../Assets/Soulace-logos_black.png";
import { Link } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const store = useStore();
  const currentAccount = store.currentAccount;
  const setWriteWriteup = store.setWriteWriteup;
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="bg-white h-20 w-full px-8 sticky top-0 shadow-lg shadow-indigo-500/40">
      <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
        <Link to={'/'}>
          <div>
            <img src={logo} alt="Soulace" className="h-44 w-auto" />
          </div>
        </Link>
        <div className="flex items-center justify-between">
            <button onClick={() => { setWriteWriteup(true) }} className="rounded-full bg-gradient-to-r from-blue-400 to-purple-900 hover:scale-105 px-4 py-3 text-white mr-4">
              <span className="text-lg mx-4 cursor-pointer">Create your world!</span>
            </button>
          <button className="rounded-full bg-gradient-to-r from-blue-800 to-teal-300 hover:scale-105 px-8 py-3 text-white mr-4">
            {user.name}
          </button>
          <button className="rounded-full bg-gradient-to-r from-slate-400 to-white-100 hover:scale-105 px-4 py-3 text-black mr-4" 
          onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
        </div>
      </div>
    </div>
  );
}
