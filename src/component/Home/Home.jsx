import React from 'react'
import urlBanner from '../../assets/urlBanner.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-[90%] h-auto my-16 flex flex-col sm:flex-row-reverse items-center justify-between">
        
            <div className="relative z-10 max-w-screen-md px-4 pb-10 pt-6 sm:py-16 mx-auto sm:px-6 lg:px-8 sm:mr-10">
                <div className="flex flex-col text-center sm:text-right sm:ml-auto">
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        URL DUMMY
                    </h2>
                    <span className="text-lg sm:text-xl lg:text-2xl my-6">
                        Your go-to solution for instantly shortening long, cumbersome URLs into sleek and shareable links!
                    </span>

                    <Link
                        className="inline-flex text-white self-center sm:self-end w-32 px-5 py-2 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                        to="/short"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="w-full sm:w-[40rem]">
                <img className="w-auto max-w-full" src={urlBanner} alt="URL shortening banner" />
            </div>
        </div>
    );
}