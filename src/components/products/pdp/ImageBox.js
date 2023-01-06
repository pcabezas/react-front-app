const ImageBox = ({desktop, mobile, alt}) => {
  return <>
          <picture>
            <source media="(max-width: 400px)" srcSet={mobile.url}></source>
            <img className="thumbnail" src={desktop.url} alt={alt}></img>
          </picture>
  </>
}

export default ImageBox;
