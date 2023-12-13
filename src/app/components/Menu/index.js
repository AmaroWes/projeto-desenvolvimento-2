import { Outlet, Link } from "react-router-dom";
import './Menu.css'


const Menu = (props) => {

    return(
        <div className="container">
            <div className="container-menu">
                <h1 style={{color: props.color.white}}>Subchef</h1>
                <ul className="menu">
                    <li className="menu-btn">
                        <Link to="/">Inventário</Link>
                    </li>
                    <li className="menu-btn">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="menu-btn">
                        <Link to="/relatorio">Relatório</Link>
                    </li>
                    <li className="menu-btn">
                        <Link to="/receitas">receitas</Link>
                    </li>
                    <li className="menu-btn">
                        <Link to="/receitas">configuração</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export {Menu}