const VideoCard = ({id, src, query}) => {
  return(
    <li  style={{
      outline: query.length >4 ? "8px dashed #bbff27" : "none",
      border: query.length >4 ? "22px solid #081405" : "none"
    }}>
      <video autoPlay controls loop muted>
         <source src={src} type="video/mp4" />
      </video>
    </li>
  )
}

export default VideoCard