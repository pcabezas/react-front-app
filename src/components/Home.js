import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'foundation-sites';
import { getHome } from '../features/home/thunks/getHome';
import TopBar from './topbar/TopBar';

function Home() {
  const home = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getHome());
  }, [])

  if (home.loaded){
    return <>
            <TopBar></TopBar>
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