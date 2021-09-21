import admin from "../../assets/img/admin.svg"
import bell from "../../assets/img/bell.svg"
import threeLine from "../../assets/img/menu-button-of-three-horizontal-lines.svg"
import bez from "../../assets/img/Без названия.png"
import loupe from "../../assets/img/loupe.svg"
import microphone from "../../assets/img/microphone.svg"
import kamera from "../../assets/img/kamera-icon.svg"
import nineDot from "../../assets/img/nine-dot.svg"
import backIcon from "../../assets/img/back-icon.svg"
import "./header.css"
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
            <div className="container header-container">
                <div className="left-icons">
                   <img src={threeLine} alt="menuButton" className="menuButton"></img>
                   <img src={bez} alt="youTube-logo" className="youtubeLogo"></img>
                </div>
                <div className="main-icons">
                    <input type="text" required className="searchInput" placeholder="Search"></input>
                    <button className="searchButton"><img src={loupe} alt="Lupe" className="lupe"></img></button>
                    <img src={loupe} alt="Lupe" className="lupe lupe2"></img>
                    <Link to="/" className="micrafon-wrapper">
                        <img src={microphone} alt="Mikrafon" className="mikrafon"></img>
                    </Link>
                </div>

                <div className="right-icons">
                    <Link to="/" className="kamera-after">
                        <img src={kamera} alt="kamera" className="right-imgs"></img>
                    </Link>
                    <Link to="/" className="menu-wrapper">
                        <img src={nineDot} alt="dots" className="right-imgs"></img>
                    </Link>
                    <Link to="/" className="bell-wrapper">
                        <img src={bell} alt="bell" className="right-imgs"></img>
                    </Link>
                    <Link to="/" className="admin-wrapper">
                        <img src={admin} alt="admin" className="right-imgs"></img>
                    </Link>
                </div>
                <Link to="/" className="admin-wrapper admin2">
                    <img src={admin} alt="admin" className="right-imgs"></img>
                </Link>
            </div>
            <div className="responsivaSearch">
                <div className="resSearchWrap">
                    <img src={backIcon} alt="back" className="responsiveimg"></img>
                    <input type="text" required className="responsivaSearchInput" placeholder="Search"></input>
                    <button className="responsiveSearchButton"><img src={loupe} alt="Lupe" className="lupe"></img></button>
                </div>
            </div>
        </header>
    );
}
export default Header;