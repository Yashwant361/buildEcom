import { useState } from "react"
import Layout from "./Layout"

export default function Orders() {

    const [orders, setOrders] = useState([
        {
            paymentId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: '12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {
            paymentId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: '12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {
            paymentId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: '12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {
            paymentId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: '12/01/26 10:15:14 Pm',
            status: 'pending'
        },
        {
            paymentId: '#qwert01',
            customerName: 'jone Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            product: 'lenovo Ideapad Slim 3',
            amount: 50000,
            date: '12/01/26 10:15:14 Pm',
            status: 'pending'
        },

    ])
    return (
        <>
            <Layout>
                <div >
                    <h1 className="text-xl font-semibold"> Payments</h1>
                    <div className="mt-6">
                        <table className="bg-white w-full border-collapse">
                            <thead className="bg-gray-200">
                                <tr className="bg-rose-500 w-full text-white ">
                                    <th className="py-4">Payment ID </th>
                                    <th>Customer's Name </th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    orders.map((item, index) => (
                                        <tr key={index}
                                        style={{
                                                background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                            }}
                                            className=" text-center"
                                        >
                                            <td className="py-4">{item.paymentId}</td>
                                            <td className="capitalize">{item.customerName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td className="capitalize">{item.product}</td>
                                            <td>₹{item.amount.toLocaleString()}</td>
                                            <td>{item.date}</td>

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
