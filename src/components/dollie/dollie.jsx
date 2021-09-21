import cep from "../../assets/img/cep3.png"
import adminPhoto from "../../assets/img/adminPhotos.svg"
import ring from "../../assets/img/ring.svg"
import heart from "../../assets/img/Video.png"
import user1 from "../../assets/img/user1.svg"
import user2 from "../../assets/img/user2.svg"
import user3 from "../../assets/img/user3.svg"
import ChannelMep from "../maps/channelMep/channelMap"
import "./dollie.css"
function Dollie (){
    return(
        <div className='dollieWrapper2'>
            <img alt='cep' className='mainCep' src={cep}></img>
            <div className='dollieAdminWrapper'>
                <div className='adminWrapper2'>
                    <img alt='adminPhoto' className='adminPhotos' src={adminPhoto}></img>
                    <div className='dollieTitleWrapper'>
                        <span className='dollieAdminName'>Margaret Phelps</span>
                        <span className='subscribers'>245K subscribed</span>
                    </div>
                </div>
                <div className='ring'>
                    <img alt='ring' className='ringPhoto' src={ring}></img>
                    <button className='subscribe'>Subscribe 2.3m</button>
                </div>
            </div>
            <div className='nawWrapper'>
                <ul className='nawLinks'>
                    <li className='nawLinksItem itemActive'>Home</li>
                    <li className='nawLinksItem'>Videos</li>
                    <li className='nawLinksItem'>Playlists</li>
                    <li className='nawLinksItem cut'>Channels</li>
                    <li className='nawLinksItem cut'>Discussion</li>
                    <li className='nawLinksItem cut'>About</li>
                </ul>
                <span className='recomendedChannel'>Recommended channel</span>
            </div>
            <div className='heart'>
                <img src={heart} alt='Video' className='heartImg'></img>
                <div className='heartTitle'>
                    <h2 className='heartTitleWrapper'>Choosing The Best Audio Player Software For Your Computer</h2>
                    <p className='heartText'>Your cheap internet-based banner advertising will become one of the sought 
                    for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and 
                    intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                    <span className='heartUnderText'>11k views  ·  6 months ago</span>
                </div>
                <ul className='userLinks'>
                    <li className='userLinksWrapper'>
                        <img className='userPhotos' alt='userPhotos' src={user1}></img>
                        <span className='userNameWrapper'>Flora Benson</span>
                    </li>
                    <li className='userLinksWrapper'>
                        <img className='userPhotos' alt='userPhotos' src={user2}></img>
                        <span className='userNameWrapper'>Violet Cobb</span>
                    </li>
                    <li className='userLinksWrapper'>
                        <img className='userPhotos' alt='userPhotos' src={user3}></img>
                        <span className='userNameWrapper'>Phillip Mullins</span>
                    </li>
                </ul>
            </div>
            <div className='channelName'>
                <h2 className='channelNameWrapper'>Margaret Phelps videos</h2>
                <ChannelMep/>
            </div>
        </div>
    )
}
export default Dollie