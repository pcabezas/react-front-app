import ImageBox from "./ImageBox";

const Carrousel = ({images}) => {
  let desktopSize = '600x600>';
  let mobileSize = '240x240>';
  return <>
            <ul className="products-carrousel-content" data-orbit>
              {
                images.map((image) => {
                  let {id, attributes} = image;
                  let {styles} = attributes;
                  let desktop = styles.find((i) => i.size == desktopSize);
                  let mobile = styles.find((i) => i.size == mobileSize);
                  return <>
                          <li data-orbit-slide={`product-${id}`}>
                            <ImageBox key={id} desktop={desktop}  mobile={mobile} alt={attributes.alt}></ImageBox>
                          </li>
                        </>
                })
              }
            </ul>
          </>
}

export default Carrousel;