import React from 'react'
import Image from 'next/image'
import Moon from '@/images/moon.jpg'

export default function CardAnswer() {
  return (
    <section>
        <div class="md:max-w-4xl m-10 ml-28 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='flex'>
            <Image className='w-8 h-8 rounded-full' src={Moon}/>
            <div className='p-0 m-0'>
                <h5>Golaginya</h5>
                <p>5 min ago</p>
            </div>
          </div>
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
          <div  className='flex justify-between pt-4 pb-0'>
          <div>
              <button className='bg-yellow-100 py-1 px-3 rounded-lg'>golong</button>
              <button className='bg-blue-200 py-1 px-3 rounded-lg mx-3'>Linux</button>
              <button className='bg-gray-300 py-1 px-3 rounded-lg'>Overflow</button>
          </div>
          <div className='flex items-center px-3'>
            <a className='flex '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
            <path d="M9 17H15" stroke="#807F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 13V10H5L12 3L19 10H15V13H9Z" stroke="#807F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 120</a>
            <a className='flex items-center px-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
            <path d="M15 3H9" stroke="#807F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 7V10H19L12 17L5 10H9V7H15Z" stroke="#807F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 120</a>
            <a className='flex'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_3184_2868)">
            <path d="M10.5 6.75C10.5 7.14782 10.342 7.52936 10.0607 7.81066C9.77936 8.09196 9.39782 8.25 9 8.25H4.5L1.5 11.25V3C1.5 2.175 2.175 1.5 3 1.5H9C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3V6.75Z" stroke="#807F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 6.75H15C15.3978 6.75 15.7794 6.90804 16.0607 7.18934C16.342 7.47064 16.5 7.85218 16.5 8.25V16.5L13.5 13.5H9C8.60218 13.5 8.22064 13.342 7.93934 13.0607C7.65804 12.7794 7.5 12.3978 7.5 12V11.25" stroke="#807F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_3184_2868">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
            </svg>3</a>
          </div>
        </div>
        </div>
        
    </section>
  )
}
