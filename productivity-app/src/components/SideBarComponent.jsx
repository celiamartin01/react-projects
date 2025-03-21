import { Link } from "react-router-dom"
import "./SideBarComponent.css"

function SideBarComponent() {
    return (
        <nav className="sidebar">
            <ul className="nav-list">
                <li>
                    <Link to="/" className="link">Today</Link>
                </li>
                <li>
                    <Link to="/all" className="link">All tasks</Link>
                </li>
                <li>
                    <Link to="/projectex" className="link">Project example page</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideBarComponent