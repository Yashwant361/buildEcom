import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 90,
            thubnail: './products/a.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 85,
            thubnail: './products/b.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 80,
            thubnail: './products/c.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 75,
            thubnail: './products/d.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 70,
            thubnail: './products/e.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 65,
            thubnail: '/products/f.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 60,
            thubnail: '/products/g.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 55,
            thubnail: '/products/h.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 50,
            thubnail: '/products/i.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 45,
            thubnail: '/products/j.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 40,
            thubnail: '/products/k.jpg'
        },
        {
            title: 'New Blue Shirt Men',
            price: 1200,
            discount: 35,
            thubnail: '/products/l.jpg'
        },
    ])
    return (
        <Layout>
            <div>
                <header>
                    <Swiper
                        pagination={true}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <img src="/images/c1.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/c2.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/c3.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/c4.png" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/c5.png" />
                        </SwiperSlide>
                    </Swiper>
                </header>

                <div className="md:p-16 p-8">
                    <h1 className="text-3xl font-bold text-center">Latest Products</h1>
                    <p className="text-center mx-auto text-gray-600 md:w-7/12 mt-2 mb-16">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et
                        Aenean massa. Cum sociis natoque penatibus et Aenean massa. Cum sociis natoque penatibus et Aenean massa. Cum sociis natoque penatibus et
                    </p>
                    <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-12">
                        {
                            products.map((item, index) => (
                                <div key={index} className="bg-white shadow-lg">
                                    <img src={item.thubnail} />
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold">{item.title}</h1>
                                        <div className="space-x-2">
                                            <label className="font-bold text-lg">₹{item.price - (item.price * item.discount) / 100}</label>
                                            <del>₹{item.price}</del>
                                            <label className="text-gray-600">({item.discount}%)</label>
                                        </div>
                                        <button className="bg-green-500 py-2 w-full rounded text-white font-semibold mt-4">Buy Now</button>
                                        <button className="bg-rose-500 py-2 w-full rounded text-white font-semibold mt-2">
                                            <i className="ri-shopping-cart-line mr-2"></i>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home