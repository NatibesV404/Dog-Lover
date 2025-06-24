import "./Navbar.css"
import { Link } from "react-router-dom";
import logo1 from "../blogapp-asset/images/Golden_Retriever.png";

function Navbar() {
    return(
        <nav>
            <Link to="/" className="logo">
                <img src={logo1} className="logo-pic" alt="Logo-pic" />
                <h3>Dog Lover</h3>
            </Link>
            <Link to="/">หน้าแรก</Link>
            {/* <Link to="/about">เกี่ยวกับเรา</Link> */}
            <Link to="/blogs">บทความทั้งหมด</Link>
        </nav>
    );
}

export default Navbar;