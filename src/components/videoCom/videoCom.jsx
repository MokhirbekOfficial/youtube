import like from "../../assets/img/likePhoto.svg"
import disLike from "../../assets/img/disLike.svg"
import share from "../../assets/img/share.svg"
import more from "../../assets/img/more.svg"
import channelImg from "../../assets/img/channelImg.png"
import autoplay from "../../assets/img/autoplay.svg"
import VideoMap from "../maps/videoMap/videoMap"
import "./videoCom.css"
function VideoRenderer(){
    return(
        <div className='videoWrapper'>
            <div className='mainVideo'>
                <iframe className='osmondagiBolalar' src="https://www.youtube.com/embed/bwMReuvkTkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className='videoTitle'>Osmondagi Bolalar</div>
                <div className='viewsWrapper'>
                    <span className='views'>123k views</span>
                    <ul className='likeWrapper'>
                        <li className='like'>
                            <img src={like} alt="Like"></img>
                            <span className='likeText'>123k</span>
                        </li>
                        <li className='like'>
                            <img src={disLike} alt="dislike"></img>
                            <span className='likeText'>213</span>
                        </li>
                        <li className='like'>
                            <img src={share} alt="share"></img>
                            <span className='likeText'>Share</span>
                        </li>
                        <li className='like curImg'>
                            <img src={more} alt="more"></img>   
                        </li>
                    </ul>
                </div>
                <hr className='firstHr'></hr>
                <div className='nextChannel'>
                    <div className='channelTitle'>
                        <img src={channelImg} alt="channelImg" className='channelImgPart'></img>
                        <div className='channelMainTitle'>
                            <span className='titleChannel'>Osmondagi Bolalar</span>
                            <span className='publishDate'>Published on 14 Jun 2019</span>
                            <p className='mainArticle'>A successful marketing plan relies heavily on the pulling-power of 
                            advertising copy. Writing result-oriented ad copy is difficult, as it must 
                            appeal to, entice, and convince consumers to take action. There is no magic 
                            formula to write perfect ad copy; it is based on a number of factors, including 
                            ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                            <span className='showMore'>Show more</span>
                        </div>
                    </div>
                    <button className='subscribe2'>Subscribe 2.3m</button>
                </div>
            </div>
            <div className='videoList'>
                <div className='nextVideo'>
                    <h2 className='nextH2'>NEXT</h2>
                    <div className='autoplayWrapper'>
                        <span className='autoplay'>Autoplay</span>
                        <img src={autoplay} alt="autoplay" className='autoplayBtn'></img>
                    </div>
                </div>
                <VideoMap/>
            </div>
        </div>
    )
}
export default VideoRenderer