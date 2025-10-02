import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="section section-contact px-4">
      <div className="container mx-auto">
        <div className="mb-7 lg:mb-10">
            <h2 className="text-4xl font-semibold uppercase text-center mb-4">
                📬 Let’s Work Together
            </h2>
            <p className="text-center text-gray-400">
                Got a project or collaboration in mind? Send a message or find me
                below.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Contact Form */}
            <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Send Message
            </button>
            <p className="text-md text-gray-400 mt-4">
                Or email me directly at{""}
                <a href="mailto:aminul721@gmail.com" className="text-blue-400 hover:underline"> aminul721@gmail.com</a>
            </p>
            </form>

            {/* Right: Google Map */}
            {/* <div className="w-full h-[400px] rounded-lg overflow-hidden border">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!2m12!3m9!1s0x3755c7af3ef0bd6f%3A0xbbb8e4b9c72b9974!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1657555299085"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div> */}

            <div className="w-full h-[400px] rounded-lg overflow-hidden border">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115201.64749869412!2d89.60208!3d25.64724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2dd7c1b4c5555%3A0x3d3f4d5e5a5b5c5d!2sPhulchhari%2C%20Gaibandha%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1696234567890!5m2!1sen!2sbd"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
