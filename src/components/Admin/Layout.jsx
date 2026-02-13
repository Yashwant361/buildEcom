import { use, useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Layout({ children }) {

    const [slideOpen, setSlideOpen] = useState(280)
    const [slideMobile, setSlideMobile] = useState(0)
    const [accountMenu, setAccountMenu] = useState(false)
    const location = useLocation()

    const menus = [

        {
            label: 'Dashboard',
            icon: <i className="ri-dashboard-3-line m-2"></i>,
            link: '/admin/dashboard'
        },
        {
            label: 'Customers',
            icon: <i className="ri-user-line m-2"></i>,
            link: '/admin/customers'
        },
        {
            label: 'Products',
            icon: <i className="ri-shopping-cart-line m-2"></i>,
            link: '/admin/products'
        },
        {
            label: 'Orders',
            icon: <i className="ri-shape-line m-2"></i>,
            link: '/admin/orders'
        },
        {
            label: 'Payments',
            icon: <i className="ri-bill-line m-2"></i>,
            link: '/admin/payments'
        },
        {
            label: 'Settings',
            icon: <i className="ri-settings-3-line m-2"></i>,
            link: '/admin/settings'
        },

    ]

    return (
        <>
            {/* Desktop */}
            <div className="md:block hidden">
                <aside
                    className=" bg-indigo-400 fixed top-0 left-0 h-full overflow-hidden"
                    style={{
                        width: slideOpen,
                        transition: '0.3s'
                    }}
                >
                    <div className="flex flex-col">
                        {
                            menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="p-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white"
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }

                        <button className="p-4 py-3 text-gray-50 text-left text-[17.5px] hover:bg-rose-600 hover:text-white"
                        >
                            <i className="ri-logout-circle-r-line m-2"></i>
                            Logout
                        </button>
                    </div>


                </aside>
                <section
                    className="bg-grey-100 h-screen "
                    style={{
                        marginLeft: slideOpen,
                        transition: '0.3s'
                    }}
                >

                    <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                        <div className="flex gap-2 items-center">
                            <button className="bg-grey-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                                onClick={() => setSlideOpen(slideOpen === 280 ? 0 : 280)}
                            >
                                <i className="ri-menu-2-line text-xl  cursor-pointer "></i>
                            </button>

                            <h1 className="text-md font-semibold cursor-pointer ">Minkart</h1>
                        </div>

                        <div>
                            <button className="relative">
                                <img
                                    src='/public/images/avatar.png'
                                    className="w-10 h-10 cursor-pointer " onClick={() => setAccountMenu(!accountMenu)} />
                                {
                                    accountMenu &&
                                    <div className="absolute top-18 right-0 bg-white  w-[200px] p-6 shadow-lg">
                                        <div>
                                            <h1 className="text-lg font-semifold">Yash</h1>
                                            <p className="text-gray-500">example@gmail.com</p>
                                            <div className="h-px bg-gray-200 my-4" />
                                            <button> <i className="ri-logout-circle-r-line mr-2"></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                }

                            </button>
                        </div>

                    </nav>
                    <div className="p-6">
                        {children}
                    </div>
                </section>
            </div>

            {/* Mobile */}
            <div className="md:hidden block">
                <aside
                    className=" bg-indigo-400 fixed top-0 left-0 h-full overflow-hidden"
                    style={{
                        width: slideOpen,
                        transition: '0.3s'
                    }}
                >
                    <div className="flex flex-col">
                        {
                            menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="p-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white"
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }
                        <button className="text-left p-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white"
                        >
                            <i className="ri-logout-circle-r-line m-2"></i>
                            Logout
                        </button>
                    </div>

                </aside>
                <section
                    className="bg-grey-100 h-screen "
                    style={{
                        marginLeft: slideMobile,
                        transition: '0.3s'
                    }}
                >

                    <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                        <div className="flex gap-2 items-center">
                            <button className="bg-grey-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                                onClick={() => setSlideOpen(slideOpen === 280 ? 0 : 280)}
                            >
                                <i className="ri-menu-2-line text-xl  cursor-pointer "></i>
                            </button>

                            <h1 className="text-md font-semibold cursor-pointer ">Minkart</h1>
                        </div>

                        <div>
                            <button className="relative">
                                <img
                                    src='/public/images/avatar.png'
                                    className="w-10 h-10 cursor-pointer " onClick={() => setAccountMenu(!accountMenu)} />
                                {
                                    accountMenu &&
                                    <div className="absolute top-18 right-0 bg-white  w-[200px] p-6 shadow-lg">
                                        <div>
                                            <h1 className="text-lg font-semifold">Yash</h1>
                                            <p className="text-gray-500">example@gmail.com</p>
                                            <div className="h-px bg-gray-200 my-4" />
                                            <button> <i className="ri-logout-circle-r-line mr-2"></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                }

                            </button>
                        </div>

                    </nav>
                    <div className="p-6">
                        {children}
                    </div>
                </section>
            </div>

        </>
    )
}
export default Layout