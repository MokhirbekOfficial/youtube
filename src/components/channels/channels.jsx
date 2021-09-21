import {Link} from "react-router-dom"
import dollie from "../../assets/img/dollie.png"
import food from "../../assets/img/food.svg"
import Map1 from "../maps/map1/map1"
import Map2 from "../maps/map2/map2"
import Map3 from "../maps/map3/map3"
function Channels (){
    return(
        <ul className="main-item">
                    <li className='dollie'>
                        <Link to='/home2' className='dollieLink'>
                            <img src={dollie} className='dollieImg' alt='Dollie Photos'></img>
                            <span className='dollieTitle'>Dollie Blair</span>
                        </Link>
                        <Map1/>
                    </li>
                    <li className='dollie'>
                        <Link to='/home2' className='dollieLink'>
                            <span className='dollieTitle'>Recommended</span>
                        </Link>
                        <Map2/>
                    </li>
                    <li className='dollie'>
                        <Link to='/home2' className='dollieLink'>
                            <img src={food} className='dollieImg' alt='Dollie Photos'></img>
                            <div>
                                <span className='dollieTitle'>Food & Drink</span>
                                <span className='foodSpan'>Recommended channel for you</span>
                            </div>
                        </Link>
                        <Map3/>
                    </li>
                </ul>
    )
}
export default Channels