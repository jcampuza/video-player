import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li className="media" onClick={() => props.onVideoSelect(video)}>
            <figure className="media-left">
                <img src={imageUrl} className="image" />
            </figure>

            <div className="media-content">
                <div className="content is-medium">
                    <p className="">
                        <strong>{title}</strong> <br />
                        {video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;