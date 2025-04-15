import React from 'react';

function About() {
    return (
        <div className="mx-4 md:mx-64 flex flex-col items-center">
            {/* Header */}
            <header className="py-5 pt-8 text-center">
                <h1 className="text-4xl text-orange-700 font-bold">About Us</h1>
            </header>

            {/* Main Section */}
            <main className="mb-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {/* Welcome Section */}
                <div className="p-5 shadow-lg rounded-lg bg-white col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold text-orange-700 py-2">Welcome to URL Dummy!</h2>
                    <p className="text-justify">
                        Navigating the internet shouldn't feel like solving a puzzle of endless, lengthy links.
                        That’s why we created <strong>URL Dummy</strong>, a modern solution to streamline your web experience.
                        Our platform enables you to shorten URLs, track their usage, and share them effortlessly—while ensuring a secure
                        and personalized experience through user accounts.
                    </p>
                </div>

                {/* What We Do Section */}
                <div className="p-5 shadow-lg rounded-lg bg-white">
                    <h2 className="text-2xl font-bold text-orange-700 py-2">What We Do</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Shorten and Manage Links:</strong> Quickly transform long URLs into concise, shareable links.</li>
                        <li><strong>Track Analytics:</strong> Gain insights into link performance, including click rates and traffic sources.</li>
                        <li><strong>Personalized Dashboard:</strong> Log in to access and manage all your links in one secure place.</li>
                    </ul>
                </div>

                {/* Technology Section */}
                <div className="p-5 shadow-lg rounded-lg bg-white">
                    <h2 className="text-2xl font-bold text-orange-700 py-2">The Technology Behind It All</h2>
                    <p className="text-justify">
                        Our platform is built with cutting-edge tools and technologies to ensure reliability and efficiency:
                    </p>
                    <ul className="list-disc list-inside py-2">
                        <li><strong>Frontend:</strong> Developed with React for a dynamic, user-friendly interface.</li>
                        <li><strong>Backend:</strong> Powered by Express to handle robust routing and server-side logic.</li>
                        <li><strong>Data Storage:</strong> Leveraging MongoDB for secure link information and user account management.</li>
                        <li><strong>Authentication:</strong> Providing a secure and tailored experience with user login functionality.</li>
                    </ul>
                </div>

                {/* Mission Section */}
                <div className="p-5 shadow-lg  rounded-lg bg-white col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold text-orange-700 py-2">Our Mission</h2>
                    <p className="text-justify">
                        At <strong>URL Dummy</strong>, we are committed to delivering a fast, secure, and user-centric tool 
                        that fits perfectly into your digital workflow. By continually improving our platform and integrating advanced technologies, 
                        we strive to stay ahead in simplifying your online experience.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default About;