import React from 'react'
import Layout from './Layout'

export default function Contact() {
    return (
        <Layout>
            <div className='bg-gray-50 py-16'>
                <div className='w-full md:w-8/12 lg:w-6/12 mx-auto px-4'>
                    {/* Header */}
                    <div className='text-center mb-10'>
                        <h1 className='text-4xl font-bold mb-4'>Get In Touch</h1>
                        <p className='text-gray-600'>
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    {/* Contact Form Card */}
                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <form className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='block text-sm font-semibold mb-2 text-gray-700'>First Name *</label>
                                    <input 
                                        type='text'
                                        required
                                        className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                        placeholder='John'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-semibold mb-2 text-gray-700'>Last Name *</label>
                                    <input 
                                        type='text'
                                        required
                                        className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                        placeholder='Doe'
                                    />
                                </div>
                            </div>

                            <div>
                                <label className='block text-sm font-semibold mb-2 text-gray-700'>Email Address *</label>
                                <input 
                                    type='email'
                                    required
                                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='john@example.com'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-semibold mb-2 text-gray-700'>Phone Number</label>
                                <input 
                                    type='tel'
                                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='+91 9999999999'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-semibold mb-2 text-gray-700'>Subject *</label>
                                <input 
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='How can we help you?'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-semibold mb-2 text-gray-700'>Message *</label>
                                <textarea 
                                    required
                                    rows={6}
                                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none'
                                    placeholder='Write your message here...'
                                />
                            </div>

                            <button 
                                type='submit'
                                className='w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg'
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className='mt-10 pt-8 border-t border-gray-200'>
                            <h3 className='text-lg font-semibold mb-4 text-center'>Or reach us directly</h3>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
                                <div>
                                    <i className="ri-mail-line text-2xl text-green-600 mb-2"></i>
                                    <p className='text-sm text-gray-600'>Email</p>
                                    <p className='font-semibold text-gray-800'>support@raycrops.com</p>
                                </div>
                                <div>
                                    <i className="ri-phone-line text-2xl text-green-600 mb-2"></i>
                                    <p className='text-sm text-gray-600'>Phone</p>
                                    <p className='font-semibold text-gray-800'>+91 9999-999-999</p>
                                </div>
                                <div>
                                    <i className="ri-map-pin-line text-2xl text-green-600 mb-2"></i>
                                    <p className='text-sm text-gray-600'>Address</p>
                                    <p className='font-semibold text-gray-800'>Bangalore, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}