

interface MobileMenuProps{
    menuOpen:boolean;
    closeMenu:() => void;
}

export function MobileMenu({menuOpen,closeMenu} : MobileMenuProps){


    return(
        <div className={`absolute right-0 h-screen top-full overflow-hidden bg-slate-900 transition-all duration-700 ease-in-out ${menuOpen ? 'w-full' : 'w-0'}`}
        >
            <nav >
                    <ul className="w-full h-96 px-12 flex flex-col items-end justify-evenly text-slate-100 text-lg font-medium">
                        <li
                        onClick={closeMenu}
                         className="hover:scale-105 transition-all duration-75"><a href="#aboutme">About</a></li>
                        <li
                        onClick={closeMenu}
                         className="hover:scale-105 transition-all duration-75"><a href="#skilss">Skills</a></li>
                        <li
                        onClick={closeMenu}
                         className="hover:scale-105 transition-all duration-75"><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
        </div>
    )
}