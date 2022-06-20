

export default function ImageCard({src, key, query}) {
  return(
    <>
      <li style={{
        outline: query.length >4 ? "8px dashed #bbff27" : "none",
        border: query.length >4 ? "22px solid #081405" : "none"
      }}>
          <img src={src} alt="" className="" key={key}/>

          {/* on :hover we display photographer and link? whic is the photographers name itself */}
      </li>
    </>
  )
}

//   border: 22px solid #081405;
  // outline: 8px dashed #bbff27;
