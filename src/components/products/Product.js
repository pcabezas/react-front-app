import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../features/product/thunks/getProduct";
import ImageBox from "./pdp/ImageBox";
import Carrousel from "./pdp/Carrousel";

const Product = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const {loaded, data, included} = product;

  useEffect(() => {
    dispatch(getProduct(slug, ['images']));
  }, []);

  const renderProductPdp = (data) => {
    let productAttr = data.attributes;
    let images = included.filter((e) => e.type == 'image');
    return <div className="grid-container fluid">
              <div className="grid-x">
                <div className="cell medium-5">
                  <Carrousel images={images}/>
                </div>
                <div className="cell medium-7">
                  <h3>
                    { productAttr.name }
                  </h3>
                  <span className="label primary">{productAttr.sku}</span>
                  <p>
                    { productAttr.description }
                  </p>
                  <div>
                    <span>Price:</span>
                    <span><b>{ productAttr.display_price }</b></span>
                  </div>
                </div>
              </div>
           </div>
  }

  return <>
            { loaded ? renderProductPdp(data) : <></>
  }
  </>
}

export default Product;