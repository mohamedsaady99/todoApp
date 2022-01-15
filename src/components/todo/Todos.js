import { Col, Row } from 'antd';
import React from 'react'
import BackLog from './BackLog';
import Completed from './Completed';
import NextUp from './NextUp';
import WorkingOn from './WorkingOn';
import { Swiper, SwiperSlide } from 'swiper/react';


function Todos() {

    return (
        <Row justify="space-around" >
            <Swiper
                spaceBetween={50}
                breakpoints={{
                    360: {
                        width: 320,
                        slidesPerView: 1,
                    },
                    482: {
                        width: 482,
                        slidesPerView: 1
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    992: {
                        width: 992,
                        slidesPerView: 3
                    },
                    1280: {
                        width: 1240,
                        slidesPerView: 4
                    }
                }}
            >
                <SwiperSlide><Col> <BackLog /></Col></SwiperSlide>
                <SwiperSlide><Col><NextUp /></Col> </SwiperSlide>
                <SwiperSlide><Col> <WorkingOn /></Col></SwiperSlide>
                <SwiperSlide><Col><Completed /></Col></SwiperSlide>
            </Swiper>




        </Row>
    )
}

export default Todos
