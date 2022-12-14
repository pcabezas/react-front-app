import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getHome } from '../features/home/thunks/getHome';
import Banner from './banners/Banner';
import BoxInfo from './boxInfo/BoxInfo';

function Home() {
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getHome());
  }, [])

  if (home.loaded){
    const { mainBanner, infoBoxes } = home.data;
    return <>
            <Banner title={ mainBanner.title }
                    images= {mainBanner.images }
                    type={ mainBanner.type }>
            </Banner>
            <BoxInfo boxes={infoBoxes}></BoxInfo>
          </>
  }else{
    return (
      <div className="Home">
        <span>... IS Loading</span>
      </div>
    );
  }
}

export default Home;