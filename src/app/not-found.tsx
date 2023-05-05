"use client"
import '@/styles/notFound.css'
import { HomeIcon } from '@heroicons/react/20/solid'

export default function NotFound() {
    return (
        <div className="overflow-hidden">
		    <div className="space"></div>
			<div className="wrapper">
				<div className="img-wrapper">
					<span>44</span>
				</div>
                <p className='text-bold'>The page you are trying to search has been <br /> moved to another universe.</p>
                <div>
                    <a
                        href="/dashboard"
                        className="mt-8 inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                        <HomeIcon className='w-6 h-6 mr-2'/>
                        Home
                    </a>
                </div>
			</div>
		</div>
    )
}