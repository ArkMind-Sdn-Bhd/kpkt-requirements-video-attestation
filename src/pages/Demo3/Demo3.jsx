import React, {useEffect, useRef, useState} from "react";
import ReactPlayer from "react-player";

export const Demo3Page = () => {



    function playPause() {
        var myVideo = document.getElementById("video1");
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    }

    return (
        <>
            <button onClick={playPause}>PLAY/PAUSE</button>
            <br />
            <video id={"video1"} height={"500"}>
                <source src="https://master-setup-redcash.hardcore-carver.42-1-60-64.plesk.page/redCash/admin/master/api/v1.0/file/1a65ec57-0ecf-4771-8cac-61f2d34999fe" type="video/mp4" />
            </video>
        </>
    );
}
