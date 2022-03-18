import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useEffect, useRef } from 'react';

interface IVideoPlayerProps {
    options: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
    controls: true,
    fluid: true,
    autoplay: true
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
    const videoNode = useRef<HTMLVideoElement>(null!);
    const player = useRef<videojs.Player>();

    useEffect(() => {
        player.current = videojs(videoNode.current, {
            ...initialOptions,
            ...options
        }).ready(function() {
            console.log('onPlayerReady', this)
        });
        return () => {
            if (player.current) {
                player.current.dispose();
            }
        };
    }, [options, player]); 

    return <video ref={videoNode} className="video-js" />;
};

export default VideoPlayer;