import { useRef, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants/serverConstants";

const VideoUpload = () => {
    const [file, setFile] = useState("");
    const [percentage, setPercentage] = useState(0);
    const inputRef = useRef();
    const fileChangeHandler = (e) => {
        setFile(e.target.files[0]);
    }

    const fileUploadHandler = async () => {
        const config = {
            onUploadProgress: function (progressEvent) {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setPercentage(percentCompleted);
            }
        }
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post(`${SERVER_URL}/video-upload`, formData, config);
        setFile("");
        inputRef.current.value = "";
    }
    return (
        <div>
            <input type="file" name="video" ref={inputRef} accept="video/*" onChange={fileChangeHandler} />
            <button onClick={fileUploadHandler} >Upload</button>
            {percentage > 0 ? <div>{`${percentage} % uploaded`}</div> : ""}
        </div>
    )
}

export default VideoUpload