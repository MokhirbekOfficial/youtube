import "../main/main.css"
import home from "../../assets/img/home-icon.png"
import compas from "../../assets/img/compass.svg"
import azolik from "../../assets/img/azolik.svg"
import library from "../../assets/img/library.svg"
import history from "../../assets/img/history.svg"
import like from "../../assets/img/like.svg"
import future_of_news from "../../assets/img/future_of_news.jpg"
import botir from "../../assets/img/botir.jpg"
import cpp_icon from "../../assets/img/cpp_icon.png"
import js from "../../assets/img/js.jpg"
import javalogo from "../../assets/img/javalogo.png"
import math from "../../assets/img/math.jpg"
import settings from "../../assets/img/settings.svg"
import finish from "../../assets/img/finish.svg"
import information from "../../assets/img/information.svg"
import home_icon from "../../assets/img/home-icon.png"
import compass from "../../assets/img/compass.svg"
import Dollie from "../dollie/dollie"
function Main(){
    return(
        <main>
            <div className="left-site">
                <div className="home active">
                    <img src={home} alt="Home" className="home-class icon"></img>
                    <span className="home-span">Bosh</span>
                </div>
                <div className="home">
                    <img src={compas} alt="Home" className="home-class"></img>
                    <span className="home-span">Yo'riqnoma</span>
                </div>
                <div className="home">
                    <img src={azolik} alt="Home" className="home-class"></img>
                    <span className="home-span">A'zo bo'lish</span>
                </div>
                <hr></hr>
                <div className="home">
                    <img src={library} alt="Home" className="home-class"></img>
                    <span className="home-span">Kutubxona</span>
                </div>
                <div className="home">
                    <img src={history} alt="Home" className="home-class"></img>
                    <span className="home-span">Tarix</span>
                </div>
                <div className="home">
                    <img src={like} alt="Home" className="home-class"></img>
                    <span className="home-span">Yoqtirilgan</span>
                </div>
                <hr></hr>
                <span className="azolar">A'zoliklar</span>
                <div className="home">
                    <img src={future_of_news} alt="Home" className="azoliklar-img"></img>
                    <span className="home-span">Future</span>
                </div>
                <div className="home">
                    <img src={botir} alt="Home" className="azoliklar-img"></img>
                    <span className="home-span">Botir Ziyatov</span>
                </div>
                <div className="home">
                    <img src={cpp_icon} alt="Home" className="azoliklar-img"></img>
                    <span className="home-span">C++</span>
                </div>
                <div className="home">
                    <img src={js} alt="Home" className="azoliklar-img"></img>
                    <span className="home-span">Java Script</span>
                </div>
                <div className="home">
                    <img src={javalogo} alt="Home" className="azoliklar-img"></img>
                    <span className="home-span">Java</span>
                </div>
                <div className="home">
                    <img src={math} alt="Home" className="azoliklar-img"></img>
                    <span className="home-span">Math</span>
                </div>
                <hr></hr>
                <span className="azolar">Boshqa qulayliklar</span>
                <div className="home">
                    <img src={settings} alt="Home" className="home-class icon"></img>
                    <span className="home-span">Sozlamalar</span>
                </div>
                <div className="home">
                    <img src={finish} alt="Home" className="home-class icon"></img>
                    <span className="home-span">Shikoyatlar</span>
                </div>
                <div className="home">
                    <img src={information} alt="Home" className="home-class icon"></img>
                    <span className="home-span">Ruxsatnoma</span>
                </div>
            </div>           
             <ul className="left-site2">
                <li className="left-site2-li">
                    <img src={home_icon} alt="home" className="left-site2-img"></img>
                    <h2 className="left-site2-h2">Bosh</h2>
                </li>
                <li className="left-site2-li">
                    <img src={compass} alt="home" className="left-site2-img"></img>
                    <h2 className="left-site2-h2">Navigator</h2>
                </li>
                <li className="left-site2-li">
                    <img src={azolik} alt="home" className="left-site2-img"></img>
                    <h2 className="left-site2-h2">A'zolik</h2>
                </li>
                <li className="left-site2-li">
                    <img src={library} alt="home" className="left-site2-img"></img>
                    <h2 className="left-site2-h2">Kutubxona</h2>
                </li>
             </ul>
             <div className="right-site">
                <Dollie />
            </div>
        </main>
    )
}
export default Main