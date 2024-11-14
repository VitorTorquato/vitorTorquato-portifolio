
import { MobileMenu } from "../mobileMenu";
import { useState } from "react";


import { CgMenuRight,CgClose } from "react-icons/cg";

export function Header(){

    const [menuOpen , setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return(
        <div className="w-full flex items-center justify-center h-20 bg-slate-900 drop-shadow mb-4 ">
            <div className="w-full max-w-7xl relative">
                <header className="w-full max-w-7xl px-2 md:px-3 flex items-center justify-between">
                    
                        <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent italic">Vitor<span className="md:text-3xl pr-2 italic bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">Torquato</span></h1>
                   
                    <nav>
                        <ul className="hidden md:flex gap-7 items-center text-slate-100 text-lg font-medium">
                            <li className="hover:scale-105 transition-all duration-75 cursor-pointer"><>About</></li>
                            <li className="hover:scale-105 transition-all duration-75 cursor-pointer">Skills</li>
                            <li className="hover:scale-105 transition-all duration-75 cursor-pointer"><>Projects</></li>
                        </ul>
                    </nav>

                    <div className="absolute right-4 z-50 cursor-pointer md:hidden">
                        <button 
                        onClick={toggleMenu}
                        >
                            {
                                menuOpen ? <CgClose size={30} color="#FFF"/> : <CgMenuRight size={30} color="#FFF"/>
                            }
                        </button>
                    </div>
                </header>
                <MobileMenu
                menuOpen={menuOpen}
                closeMenu={closeMenu}
                />
            
            </div>
        </div>
    )
}