import {useState, useEffect} from "react"
function VideoMap(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>response.json())
        .then((data)=>setData(data.slice(20,23)))
    }, [])
    return(
        <ul className='VideoMapRendererPart'>
            {data.length>0 && data.map(row=>(
                <li key={row.id} className='dollieWrapper'>
                    <img src={row.url} alt='randomPhoto' className='randomPhoto'></img>
                    <span className='randomTitle'>{row.title}</span>
                </li>
            ))}
        </ul>
    )
}
export default VideoMap