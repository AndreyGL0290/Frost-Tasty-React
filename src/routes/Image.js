import { useState } from "react"
import { useLocation } from "react-router-dom"
import closeImage from "../closeImageFunc"
import homePageReroute from "../RerouteFunc"
import tg from "../telegram"

const Image = props => {
    let [load, setLoad] = useState(false)
    const location = useLocation()

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
              tg.BackButton.offClick(homePageReroute)
              tg.BackButton.onClick(closeImage)

              if (location.pathname == '/') tg.BackButton.show()

              document.getElementById('image-loader').style.display = 'block' 
              document.getElementById('image-loader').style.backgroundImage = 'url(' + event.target.src + ')'
              document.getElementsByTagName('body')[0].style.overflow = 'hidden'
            }}
          />
        </>
    )
}

export default Image