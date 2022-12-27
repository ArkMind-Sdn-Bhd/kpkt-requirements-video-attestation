import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";

export const Demo1Page = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [videoList, setVideoList] = useState([
        {
            id: 1,
            url: 'https://www.youtube.com/watch?v=hS5CfP8n_js',
            imageId: 'hS5CfP8n_js',
            watched: false
        },
        {
            id: 2,
            url: 'https://www.youtube.com/watch?v=APgx1k-2Tqc',
            imageId: 'APgx1k-2Tqc',
            watched: false
        }
    ])
    const [currentVideoDetails, setCurrentVideoDetails] = useState(videoList[0]);

    const onGoToNextVideo = () => {

        if (currentIdx == videoList.length - 1) {
            alert("All video watched")
            return;
        }

        let tempVideoList = [...videoList];
        videoList[currentIdx].watched = true;
        setVideoList(tempVideoList);

        setCurrentIdx((currentIdx) => currentIdx + 1);
        setCurrentVideoDetails(videoList[currentIdx + 1]);
    }

    useEffect(() => {
        setCurrentVideoDetails(videoList[currentIdx]);
    }, [currentIdx])

    return (
        <>
            <h2>Current Video</h2>
            {
                <ReactPlayer
                    url={currentVideoDetails.url}
                    playing={true}
                    onEnded={() => onGoToNextVideo()}
                    controls={false}
                />
            }
            <h2>Video List</h2>
            {
                videoList.map((video, index) => {
                    return (
                        <img
                            src={`https://i3.ytimg.com/vi/${video.imageId}/hqdefault.jpg`}
                            preview={false}
                            style={{cursor: "pointer"}}
                            onClick={() => {
                                if (video.watched) {
                                    setCurrentVideoDetails({
                                        ...video
                                    })
                                } else {
                                    alert("Please watch the video first")
                                }
                            }
                            }
                            width="20%"
                            height="20%"
                        />
                    )
                })
            }
            <button onClick={() => {}}>Next</button>
        </>
    );
}
