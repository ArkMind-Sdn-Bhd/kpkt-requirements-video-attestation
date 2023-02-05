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

    function makeBig() {
        var myVideo = document.getElementById("video1");
        myVideo.width = 560;
    }

    function makeSmall() {
        var myVideo = document.getElementById("video1");
        myVideo.width = 320;
    }

    function makeNormal() {
        var myVideo = document.getElementById("video1");
        myVideo.width = 420;
    }


    return (
        <>
            <button onClick={playPause}>PLAY/PAUSE</button>
            <video id={"video1"}>
                <source src="https://master-setup-redcash.hardcore-carver.42-1-60-64.plesk.page/redCash/admin/master/api/v1.0/file/1a65ec57-0ecf-4771-8cac-61f2d34999fe" type="video/mp4" />
            </video>
        </>
    );
}
