import { useState } from 'react'
import Layout from './Layout'

function AdminProducts() {
    const [products, setProducts] = useState([
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/a.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/b.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/c.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/d.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/e.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/f.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/g.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/h.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/i.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/j.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/k.jpg'
        },
        {
            title: "Men's wear",
            desc: 'A shirt is a versatile upper-body garment, typically featuring sleeves (short or long), a collar, and a front button-down opening',
            price: 2000,
            discount: 15,
            image: '../products/l.jpg',
            qty: 1
        },
    ])
    return (
        <>
            <Layout>
                <div>
                    <h1 className="text-xl font-semibold mb-4" > Product</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
                        {
                            products.map((item, index) => (
                                <div key={index}
                                    className='bg-white rounded-md shadow-lg'>
                                    <img
                                        src={item.image}
                                        className='rounded-t-md w-full h-[200] '
                                    />
                                    <div className='p-4'>
                                        <h1 className='font-semibold text-lg'>{item.title}</h1>
                                        <p className='text-gray-600'>{item.desc.slice(0, 50)}...</p>
                                        <div className='flex gap-2 mt-2'>
                                            <label>₹{item.price - (item.price * item.discount) / 100}</label>
                                            <del className='font-semibold'>₹{item.price}</del>
                                            <label className='text-gray-600'>({item.discount}% off)</label>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Layout>
        </>

    )
}

export default AdminProducts