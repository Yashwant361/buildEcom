import { useState } from "react"
import Layout from "./Layout"

export default function Customers() {

    const [customers, setCustomers] = useState([
        {
            customerId: '#qwerty01',
            customerName: 'John Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            date: '12/01/26 10:15:14 PM',
            address :'Earth 616'
        },
        {
            customerId: '#qwerty01',
            customerName: 'John Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            date: '12/01/26 10:15:14 PM',
            address :'Earth 616'
        },
        {
            customerId: '#qwerty01',
            customerName: 'John Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            date: '12/01/26 10:15:14 PM',
            address :'Earth 616'
        },
        {
            customerId: '#qwerty01',
            customerName: 'John Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            date: '12/01/26 10:15:14 PM',
            address :'Earth 616'
        },
        {
            customerId: '#qwerty01',
            customerName: 'John Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            date: '12/01/26 10:15:14 PM',
            address :'Earth 616'
        },
        {
            customerId: '#qwerty01',
            customerName: 'John Doe',
            email: 'john@gmail.com',
            mobile: '+91 9876543210',
            date: '12/01/26 10:15:14 PM',
            address :'Earth 616'
        },
        
    ])
    return (
        <>
            <Layout>
                <div>
                    <h1 className="text-xl font-semibold">Customers</h1>
                    <div className="mt-6 overflow-x-auto">
                        <table className="bg-white w-full border-collapse">
                            <thead>
                                <tr className="bg-rose-500 text-white text-left">
                                    <th className="py-4 px-4">Customer Id</th>
                                    <th className="py-4 px-4">Customer's Name</th>
                                    <th className="py-4 px-4">Email</th>
                                    <th className="py-4 px-4">Mobile</th>
                                    <th className="py-4 px-4">Date</th>
                                    <th className="py-4 px-4">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map((item, index) => (
                                        <tr key={index}
                                            style={{
                                                background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                            }}>
                                            <td className="py-4 px-4">{item.customerId}</td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src='/public/images/avatar.png'
                                                        className="w-10 h-10 rounded-full"
                                                    />
                                                    <div className="capitalize flex flex-col justify-center">
                                                        <span className="font-semibold">{item.customerName}</span>
                                                        <small className="text-gray-500">
                                                            {item.date}
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">{item.email}</td>
                                            <td className="py-4 px-4">{item.mobile}</td>
                                            <td className="py-4 px-4">
                                                {new Date(item.date).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-4">{item.address}</td>
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
