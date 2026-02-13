import React from 'react'
import Layout from './Layout'

export default function Login() {
    return (
        <>
            <Layout>



                <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden'>
                    <img src='/images/login.jpg' className='hidden md:block object-contain w-full h-full bg-gray-100' />
                    <div className='flex items-center justify-center p-8 bg-gray-50'>
                        <div className='w-full max-w-md'>
                            <h1 className='text-3xl font-bold mb-2'>Welcome Back</h1>
                            <p className='text-gray-600 mb-6'>Login to your account</p>

                            <form className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-semibold mb-2'>Email</label>
                                    <input
                                        type='email'
                                        required
                                        className='w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500'
                                        placeholder='Enter your email'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold mb-2'>Password</label>
                                    <input
                                        type='password'
                                        required
                                        className='w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500'
                                        placeholder='Enter your password'
                                    />
                                </div>

                                <div className='flex items-center justify-between'>
                                    <label className='flex items-center'>
                                        <input type='checkbox' className='mr-2' />
                                        <span className='text-sm text-gray-600'>Remember me</span>
                                    </label>
                                    <a href='/forgot-password' className='text-sm text-green-600 hover:underline'>
                                        Forgot Password?
                                    </a>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition-all duration-300'
                                >
                                    Login
                                </button>
                            </form>

                            <p className='text-center mt-6 text-gray-600'>
                                Don't have an account?
                                <a href='/signup' className='text-green-600 font-semibold hover:underline ml-1'>Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}