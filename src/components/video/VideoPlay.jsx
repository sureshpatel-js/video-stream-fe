import { SERVER_URL } from "../../constants/serverConstants";
const VideoPlay = () => {
    return (
        <div>
            <video id="videoPlayer" width="50%" controls muted="muted" >
                <source src={`${SERVER_URL}/video-play`} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlay;