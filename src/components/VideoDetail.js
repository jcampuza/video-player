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
        <div className="VideoDetail">
            <div className="VideoDetail__container">
                <iframe className="embed-responsive-item embed" src={url}></iframe>
            </div>

            <div className="VideoDetail__description">
                <h3 className="VideoDetail__description--title">{title}</h3>
                <div className="VideoDetail__description--desc">{description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;