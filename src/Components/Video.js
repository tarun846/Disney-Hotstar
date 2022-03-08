import React , {useRef , useEffect} from 'react'

function Video({data}) {
    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);
console.log(data);
    return (
        <div className="video">
            <div className="video__title">
                <h2>{data.name}</h2>
            </div>
            <iframe
            className = 'Video_player'
                src={`https://www.youtube.com/embed/${data.key}`}
                ref={iframeRef}
                
                title="video"
            ></iframe>
        </div>
    )
}

export default Video
