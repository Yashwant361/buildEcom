import { useState } from "react"
import Layout from "./Layout"

export default function Orders() {

    const [orders, setOrders] = useState([
        {
            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: '12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {
            orderId: '#qwert02',
            customerName: 'Jane Smith',
            email: 'jane@gmail.com',
            mobile: '+91 9876543211',
            product: 'Dell Inspiron 15',
            amount: 45000,
            date: '12/01/26 11:30:20 Am',
            status: 'processing'
        },
        {
            orderId: '#qwert03',
            customerName: 'Bob Johnson',
            email: 'bob@gmail.com',
            mobile: '+91 9876543212',
            product: 'HP Pavilion',
            amount: 55000,
            date: '12/01/26 02:45:10 Pm',
            status: 'dispatched'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {

            orderId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210 ',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: ' 12/01/26 10:15:14 Pm',
            status: 'pending'
        },

    ])
    return (
        <>
            <Layout>
                <div >
                    <h1 className="text-xl font-semibold"> Orders</h1>
                    <div className="mt-6">
                        <table className="bg-white w-full border-collapse">
                            <thead className="bg-gray-200">
                                <tr className="bg-rose-500 w-full text-white ">
                                    <th className="py-4">S.No </th>
                                    <th className="py-4">Order ID </th>
                                    <th>Customer's Name </th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    orders.map((item, index) => (
                                        <tr key={index}
                                            className=" text-center"
                                            style={{
                                                background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                            }}>
                                            <td>{index + 1}</td>
                                            <td className="py-4">{item.orderId}</td>
                                            <td className="capitalize">{item.customerName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td className="capitalize">{item.product}</td>
                                            <td>₹{item.amount.toLocaleString()}</td>
                                            <td>{item.date}</td>
                                            <td className="capitalize">
                                                <select className="border p-0.1 border-gray-200">
                                                    <option value='pending'>Pending</option>
                                                    <option value='processing'>Processing</option>
                                                    <option value='dispatch'>Dispatched</option>
                                                    <option value='return'>Return</option>
                                                </select>
                                                {/* {item.status} */}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>

        </>
    )
}
