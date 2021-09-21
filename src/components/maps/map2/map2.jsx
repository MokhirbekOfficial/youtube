import {useState, useEffect} from "react"
function Map2(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>response.json())
        .then((data)=>setData(data.slice(7,12)))
    }, [])
    return(
        <ul className='mapRenderer'>
            {data.length>0 && data.map(row=>(
                <li key={row.id} className='dollieWrapper'>
                    <img src={row.url} alt='randomPhoto' className='randomPhoto'></img>
                    <span className='randomTitle'>{row.title}</span>
                </li>
            ))}
        </ul>
    )
}
export default Map2