import React, { useState } from 'react';
import axios from 'axios';


const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        setErrorMessage("")
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/contact', formData);
            console.log('Response:', response.data);
            setSuccessMessage("Thank you. Your submission was successful. We will get back to you soon!")
            // Reset form or handle the UI changes as necessary
        } catch (error) {
            setErrorMessage(error.response.data.error)
            console.error('Error sending form:', error.message);
        }
    }
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                        <form onSubmit={handleSubmit}className="flex-auto p-5 lg:p-10">
                            <h4 className="text-2xl font-semibold">
                                Want to learn more about this app?
                            </h4>
                            <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                Complete this form and we will get back to you soon.
                            </p>
                            <div className="relative w-full mb-3 mt-8">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Full Name"
                                    style={{ transition: "all .15s ease" }}
                                    value={formData.name}
                                    onChange={handleChange}
                                    name="name"
                                    required
                                    minlength="3"
                                    maxlength="30"
                                />
                            </div>

                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Email"
                                    style={{ transition: "all .15s ease" }}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    cols="80"
                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Type a message..."
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    minlength="10"
                                    maxlength="500"
                                />
                                <p className="text-red-500">{errorMessage}</p>
                                <p>{successMessage}</p>
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    className=" active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;