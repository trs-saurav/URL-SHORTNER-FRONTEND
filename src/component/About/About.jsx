import React from 'react'

function About() {
  return (
    <div className='flex flex-wrap mx-64  '>
       <header className='py-5 pt-8'>
        <h1 className='text-4xl text-orange-700 font-bold'>About Us</h1>
    </header>
    <main >
        <h2 className='py-5' >Welcome to URL Dummy!</h2>
        <p className='text-justify '>
            Navigating the internet shouldn't feel like solving a puzzle of endless, lengthy links.
            That’s why we created <strong>URL Dummy</strong>, a modern solution to streamline your web experience.
            Our platform enables you to shorten URLs, track their usage, and share them effortlessly—
            while also ensuring a secure and personalized experience through user accounts.
        </p>
        
        <h2 className='py-5 font-bold'>What We Do</h2>
        <ul>
            <li><strong>Shorten and Manage Links:</strong> Quickly transform long URLs into concise, shareable links.</li>
            <li><strong>Track Analytics:</strong> Gain insights into link performance, including click rates and traffic sources.</li>
            <li><strong>Personalized Dashboard:</strong> Log in to access and manage all your links in one secure place.</li>
        </ul>
        
        <h2 className='py-5 font-bold'>The Technology Behind It All</h2>
        <p className='text-justify'>
            Our platform is built with a seamless integration of cutting-edge tools and technologies to ensure reliability and efficiency:
        </p>
        <ul className='py-2'>
            <li><strong>Frontend:</strong> Developed with React for a dynamic, user-friendly interface.</li>
            <li><strong>Backend:</strong> Powered by Express to handle robust routing and server-side logic.</li>
            <li><strong>Data Storage:</strong> Leveraging MongoDB, a powerful NoSQL database, for storing and managing link information and user accounts securely.</li>
            <li><strong>Authentication:</strong> Implementing login functionality to provide a tailored and secure experience, ensuring your data is accessible only to you.</li>
        </ul>
        
        <h2 className='py-5 font-bold'>Our Mission</h2>
        <p className='text-justify pb-14'>
            At <strong>URL Dummy</strong>, we are committed to delivering a fast, secure, and user-centric tool 
            that fits perfectly into your digital workflow. By continually improving our platform and integrating advanced technologies, 
            we strive to stay ahead in simplifying your online experience.
        </p>
    </main>

    </div>
  )
}

export default About
