import React from 'react'
import Image from 'next/image'
import blogging from '@/images/Developer/blogging.png'

export default function AskQuestion() {
  return (
    <section>
        <div className=' bg-yellow-200 rounded-md items-center mx-28'>
            <div className='flex justify-between mx-auto m-10'>
                 <div className='m-10'>
                    <h2 className='text-3xl font-semibold'>ចូលរួមជាមួយយើងដើម្បីបង្កើតសហគមន៍សិក្សា</h2>
                    <p className='py-4 text-xl'>រីករាយក្នុងការសួរ និងឆ្លើយសំណួរទាក់ទងនឹងជំនាញផ្សេងៗដើម្បីចែករំលែកចំណេះដឹងឲ្យគ្នាទៅវិញទៅមក</p>
                        <div>
                            <button className='flex items-center justify-center bg-yellow-300 px-5 py-2 rounded-md text-xl'>សួរសំណួរ
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5777 6.07733C13.9032 5.75189 14.4308 5.75189 14.7562 6.07733L18.0896 9.41066C18.415 9.7361 18.415 10.2637 18.0896 10.5892L14.7562 13.9225C14.4308 14.2479 13.9032 14.2479 13.5777 13.9225C13.2523 13.5971 13.2523 13.0694 13.5777 12.744L15.4885 10.8333H2.50033C2.04009 10.8333 1.66699 10.4602 1.66699 9.99992C1.66699 9.53968 2.04009 9.16659 2.50033 9.16659H15.4885L13.5777 7.25584C13.2523 6.9304 13.2523 6.40277 13.5777 6.07733Z" fill="#333333"/>
                                </svg>
                            </button>
                        </div>
                </div> 
                <div className='mx-10'>
                    <Image src={blogging}/>
                </div>
            </div>
        </div>
            <div className='flex items-center justify-between mx-28'>
                <div className='flex items-center '>
                    <button className='bg-yellow-200 flex items-center py-1 px-3 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path d="M6 11.5C8.76142 11.5 11 9.26142 11 6.5C11 3.73858 8.76142 1.5 6 1.5C3.23858 1.5 1 3.73858 1 6.5C1 9.26142 3.23858 11.5 6 11.5Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 3.5V6.5L8 7.5" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>New</button>
                    <button className='bg-gray-200 flex items-center py-1 px-3 rounded-2xl mx-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <g clip-path="url(#clip0_1830_12580)">
                    <path d="M11 6.03993V6.49993C10.9994 7.57814 10.6503 8.62727 10.0047 9.49085C9.35908 10.3544 8.45164 10.9862 7.41768 11.2919C6.38372 11.5976 5.27863 11.5609 4.26724 11.1872C3.25584 10.8136 2.39233 10.123 1.80548 9.21847C1.21863 8.31395 0.939896 7.24396 1.01084 6.16809C1.08178 5.09222 1.4986 4.0681 2.19914 3.24847C2.89968 2.42884 3.84639 1.85762 4.89809 1.62001C5.9498 1.38239 7.05013 1.4911 8.035 1.92993" stroke="#807F7F" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 2.5L6 7.505L4.5 6.005" stroke="#807F7F" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1830_12580">
                    <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                        Closed</button>
                    <button className='bg-gray-200 flex items-center py-1 px-3 rounded-2xl'>Filter By Tags
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M3.25 5L6.5 8.25L9.75 5" stroke="#807F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                </div>
                <div>
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                        </div>
                </div>
            </div>
    </section>
  )
}
