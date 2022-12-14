import { configureStore } from '@reduxjs/toolkit'
import bannerSlice from '../features/banner/bannerSlice'
import homeSlice from '../features/home/homeSlice'

export default configureStore({
  reducer: {
    banner: bannerSlice,
    home: homeSlice
},
})