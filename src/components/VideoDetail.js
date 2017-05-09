import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div className="column is-8">Loading...</div>
    }

    const title = video.snippet.title;
    const description = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail column is-8">
            <div className="image is-16by9">
                <iframe className="embed-responsive-item embed" src={url}></iframe>
            </div>

            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;