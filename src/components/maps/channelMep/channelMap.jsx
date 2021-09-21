import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
function ChannelMep(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>response.json())
        .then((data)=>setData(data.slice(1,4)))
    }, [])
    return(
        <ul className='channelMapRenderer'>
            {data.length>0 && data.map(row=>(
                <li key={row.id} className='dollieWrapper'>
                    <Link to='/video'><img src={row.url} alt='randomPhoto' className='randomPhoto'></img></Link>
                    <span className='randomTitle'>{row.title}</span>
                </li>
            ))}
        </ul>
    )
}
export default ChannelMep