import { useState } from "react"

const Image = props => {
    let [load, setLoad] = useState(false)

    return (
        <>
          {!load ? (
            <div className="content-wrapper">
                <div className="placeholder">
                    <div className="animated-background"></div>
                </div>
            </div>
          ) : null}
          <img
            src={props.src}
            className="card-image"
            style={!load ? { display: 'none' } : {}}
            onLoad={() => setLoad(true)}
            onClick={(event) => {
              document.addEventListener('hashchange', (event) => {
                event.preventDefault()
                document.getElementById('image-loader').style.display = 'none'
                document.getElementById('image-loader').style.backgroundImage = 'none'
                document.getElementsByTagName('body')[0].style.overflow = 'auto'
              })
              document.getElementById('image-loader').style.display = 'block' 
              document.getElementById('image-loader').style.backgroundImage = 'url(' + event.target.src + ')'
              document.getElementsByTagName('body')[0].style.overflow = 'hidden'
            }}
          />
        </>
    )
}

export default Image