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
              console.log('click')
              document.getElementById('image-loader').style.display = 'block' 
              document.getElementById('image-loader').style.backgroundImage = 'url(' + event.target.src + ')'
              document.getElementsByTagName('body')[0].style.overflow = 'hidden'
            }}
          />
        </>
    )
}

export default Image