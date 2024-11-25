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
                        className="object-cover  w-full h-[600px]"
                        src="https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg"

                        alt="image slide 3"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover object-top w-full h-[600px]"
                        src="https://mewmagazine.es/wp-content/uploads/2021/07/Eladio-Carrion_000.jpg"

                        alt="image slide 4"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className=" w-full  object-cover object-top h-[600px]"
                        src="https://pbs.twimg.com/media/Fvs58kqWAAsu7MW.jpg"

                        alt="image slide 5"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover object-top w-full h-[600px]"
                        src="https://luismigueloficial.com/themes/lm/assets/images/LM_header.jpg"

                        alt="image slide 6"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover object-top w-full h-[600px]"
                        src="https://media.vsstatic.com/image/upload/if_fc_gte_1/g_auto,q_auto,c_fill,w_1680,h_720/if_else/g_center,q_auto,c_fill,w_1680,h_720/if_end/dpr_auto,f_auto/f_auto/hero/event/concerts/61742-billie-eilish/billie-eilish-tickets-9.jpg"

                        alt="image slide 7"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover object-top w-full h-[600px]"
                        src="https://media.pitchfork.com/photos/600065c87766d75d299a35b2/master/pass/Foo-Fighters.jpg"

                        alt="image slide 8"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover object-center w-full h-[600px]"
                        src="https://www.billboard.com/wp-content/uploads/2022/05/bad-bunny-cover-art-2022-billboard-1548.jpg"

                        alt="image slide 9"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover object-top w-full h-[600px]"
                        src="https://revistadescenarios.com/wp-content/uploads/2024/06/Gustavo-Cerati-4.jpg"

                        alt="image slide 10"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover object-center w-full h-[600px]"
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/ZzIFZq8jQArT0rkS_Duki.jpg?auto=format,compress&rect=0,0,2048,864&w=1024&h=432"

                        alt="image slide 11"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="object-cover object-top w-full h-[600px]"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Linkin_Park_-_From_Zero_Lead_Press_Photo_-_James_Minchin_III.jpg/1200px-Linkin_Park_-_From_Zero_Lead_Press_Photo_-_James_Minchin_III.jpg"

                        alt="image slide 12"
                    />
                </SwiperSlide>

            </Swiper>
        </>
    );
}