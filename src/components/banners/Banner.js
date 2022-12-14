// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Banner css
import './banner.scss'

const Banner = ({title, type, images}) => {

    const imageFormatUrl = ({image}) => {
        return "http://0.0.0.0:1337" + image.formats.large.url
    }

    return (
            <div className="grid-x grid-margin-y">
                <div className='cell'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}>
                        {
                            images.map((image)=>{
                                return <SwiperSlide key={image.id}>
                                        <img src={imageFormatUrl(image)} alt={image.image.alternativeText}></img>
                                    </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
    )
}

export default Banner;