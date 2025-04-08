import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-[70%] h-auto my-[6.6rem]  flex flex-row-reverse items-center justify-between ">
        
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 mr-16">
                    <div className="flex flex-col sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        URL DUMMY
                        </h2>
                        <span className="text-2xl my-8 ">Your go-to solution for instantly shortening long, cumbersome URLs into sleek and shareable links!</span>

                        <Link
                            className="inline-flex text-white self-end w-36 px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/short"
                        >
                         Get Started
                        </Link>
                    </div>
                </div>

                <div className=" w-[80rem] ">
                    <img className="w-96" src=".\src\assets\ImageRaccourcisseurURL.png" alt="image1" />
                </div>
        </div>
    );
}