import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-cover w-full h-[600px]"
                        src="https://i0.wp.com/tailschannel.com/wp-content/uploads/2021/11/STEVEAOKIHERO.png?resize=1920%2C1024&ssl=1"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover object-top w-full h-[600px]"
                        src="https://ca-times.brightspotcdn.com/dims4/default/2d36d4a/2147483647/strip/false/crop/4935x3290+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F33%2Ff367fb35474d864941e977e5f48e%2F927846-ca-0321-red-hot-chili-peppers-sunday-calendar-cover-mrt-02.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-full h-[600px]"
                        src="https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg"

                        alt="image slide 3"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover w-full h-[600px]"
                        src="https://mewmagazine.es/wp-content/uploads/2021/07/Eladio-Carrion_000.jpg"

                        alt="image slide 4"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className=" w-full object-cover object-top h-[600px]"
                        src="https://pbs.twimg.com/media/Fvs58kqWAAsu7MW.jpg"

                        alt="image slide 5"
                    />
                </SwiperSlide>

            </Swiper>
        </>
    );
}