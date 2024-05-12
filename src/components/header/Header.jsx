import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(){
    return(
        <>
            <div className="header">
                <span className="logo">LeChair</span>
                <nav className="nav-header">
                    <NavLink to="" >
                        Mobílias
                    </NavLink>
                    <NavLink >
                        Produtos
                    </NavLink>
                    <NavLink >
                        Sobre Nós
                    </NavLink>
                <button>Registrar</button>
                </nav>
            </div>
        </>
    )
}