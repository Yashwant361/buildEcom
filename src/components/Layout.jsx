import { Link, useLocation, useNavigate } from 'react-router-dom'
import { React, useState } from 'react'

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const menus = [
    {
      label: "Home",
      href: '/',
    },
    {
      label: "Products",
      href: '/products',
    },
    {
      label: "Category",
      href: '/category',
    },
    {
      label: "Contact us",
      href: '/contact-us',
    }
  ]

  function mobileLink(href) {
    navigate(href)
    setOpen(false)
  }
  
  return (
    <>
      <div>
        <nav className='sticky top-0 left-0 shadow-lg bg-white z-50'>
          <div className='md:w-10/12 mx-auto flex items-center justify-between px-4 py-3'>
            <Link to='/'>
              <img
                src='/images/R.png'
                className='w-[100px] cursor-pointer'
              />
            </Link>
            <button className='md:hidden' onClick={() => setOpen(!open)}>
              <i className="ri-menu-line text-3xl"></i>
            </button>
            <ul className='md:flex gap-6 items-center hidden'>
              {
                menus.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={`px-4 py-1 rounded font-semibold transition-all duration-300 
                        ${location.pathname === item.href
                          ? 'bg-green-400 text-white'
                          : 'text-gray-600 hover:bg-blue-600 hover:text-white'
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))
              }
              <Link
                className='border-2 text-green-600 px-4 py-1 rounded font-semibold hover:bg-green-600 hover:text-white transition-all duration-300'
                to='/login'
              >
                Login
              </Link>
              <Link
                className='border-2 border-green-600 text-green-600 px-4 py-1 rounded font-semibold hover:bg-green-600 hover:text-white transition-all duration-300'
                to='/signup'
              >
                Signup
              </Link>
            </ul>
          </div>
        </nav>

        <aside className='md:hidden bg-slate-900 shadow-lg fixed top-0 left-0 h-full z-50 overflow-hidden'
          style={{
            width: (open ? 250 : 0),
            transition: '0.3s'
          }}
        >
          <div className='flex flex-col p-8 gap-6'>
            <button onClick={() => setOpen(false)} className='text-white self-end mb-4'>
              <i className="ri-close-line text-3xl"></i>
            </button>
            {
              menus.map((item, index) => (
                <button onClick={() => mobileLink(item.href)} key={index} className='text-white text-left'>
                  {item.label}
                </button>
              ))
            }
            <button onClick={() => mobileLink('/login')} className='text-white text-left'>Login</button>
            <button onClick={() => mobileLink('/signup')} className='text-white text-left'>Signup</button>
          </div>
        </aside>

        <main className=''>
          {children}
        </main>

        {/* <footer className='bg-orange-600 py-8'>
          <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div>
              <h1 className='text-white font-semibold text-2xl mb-3'>Brand Details</h1>
              <Link to='/'>
                <img
                  src='/images/R.png'
                  className='w-[100px] cursor-pointer bg-white mb-4.5'
                />
              </Link>
              <p className='text-gray-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry., but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div>
              <h1 className='text-white font-semibold text-2xl mb-3'>Website Links</h1>
              <ul className='space-y-3 text-gray-50'>
                {
                  menus.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.label}</Link>
                    </li>
                  ))
                }
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
              </ul>
            </div>

            <div>
              <h1 className='text-white font-semibold text-2xl mb-3'>Follow Us</h1>
              <ul className='space-y-2 text-gray-50'>
                <li><Link to='/login'>Facebook</Link></li>
                <li><Link to='/signup'>Youtube</Link></li>
                <li><Link to='/signup'>Twitter</Link></li>
                <li><Link to='/signup'>Linkedin</Link></li>
                <li><Link to='/signup'>Instagram</Link></li>
              </ul>
            </div>

            <div>
              <h1 className='text-white font-semibold text-2xl mb-3'>Contact Us</h1>
              <form className='space-y-4'>
                <input
                  required
                  name='fullname'
                  className='bg-white w-full rounded p-3'
                  placeholder='Enter Your Name'
                />
                <input
                  required
                  type='email'
                  name='email'
                  className='bg-white w-full rounded p-3'
                  placeholder='Enter Your Email'
                />
                <textarea
                  required
                  name='message'
                  className='bg-white w-full rounded p-3'
                  rows={3}
                  placeholder='Enter Message'
                />
                <button className='bg-black text-white py-3 px-6 rounded'>Submit</button>
              </form>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  )
}