import './infoBox.scss'

const BoxInfo = ({boxes}) => {
  const imageFormatUrl = ({image}) => {
    return "http://0.0.0.0:1337" + image.formats.thumbnail.url
  }

  return <>
          <div className="grid-x grid-padding-x grid-margin-x grid-margin-y">
            { boxes.map((box) => {
              return <div className="large-3 medium-3 small-4 cell">
                      <div className="info-box">
                        <span className="wrap-img"><img src={imageFormatUrl(box)} alt={box.image.alternativeText}></img></span>
                        <span className="wrap-text">
                          {box.description}
                        </span>
                      </div>
                    </div>
            })}
          </div>
          </>

}

export default BoxInfo;