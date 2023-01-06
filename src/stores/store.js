import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/authentication/loginSlice'
import bannerSlice from '../features/banner/bannerSlice'
import homeSlice from '../features/home/homeSlice'
import productSlice from '../features/product/productSlice'

export default configureStore({
  reducer: {
    banner: bannerSlice,
    home: homeSlice,
    auth: loginSlice,
    product: productSlice
},
})