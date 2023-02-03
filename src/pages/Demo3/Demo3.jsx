import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";

export const Demo3Page = () => {

    return (
        <>
            <ReactPlayer
                width={"100%"}
                height={"100%"}
                url='https://player.vimeo.com/video/795140716?keyboard=0'
                controls={true}
                onEnded={() => alert("Video ended")}
            />
        </>
    );
}
