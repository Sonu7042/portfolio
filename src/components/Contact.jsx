import React, { useEffect, useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    AOS.init();
    emailjs.init("-rtIe-3NVfZbRF6md"); 
  }, []);

  const [data, setData] = useState({ name: '', email: '', message: '' });

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('All fields are required!');
      return;
    }

    const param = {
      sendername: data.name,
      to:"sonusinghmourya100@gmail.com",
      message: ` Email:${data.email}   Message>${data.message}`,
    };

    const serviceId = 'service_f69gqkx';
    const templateId = 'template_qk53lq4';

    emailjs
      .send(serviceId, templateId, param)
      .then(() => {
        alert('Message sent successfully!');
        setData({ name: '', email: '', message: '' }); // Clear form after sending
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send the message.');
      });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32 "
    >
      <div className="flex flex-col justify-center items-center w-full h-full text-white px-4">
        {/* Heading */}
        <p className="text-4xl font-bold inline text-right border-b-4 border-[#00FFCA]">
          Contact
        </p>
        {/* Description */}
        <p className="py-6 ">
          Submit the form below or send me an email -{' '}
          <span className="font-bold">sonusinghmourya100@gmail.com</span>
        </p>

        {/* Form */}
        <div>
          <form onSubmit={sendMail}>
            <input
              onChange={onchange}
              value={data.name}
              type="text"
              placeholder="Name"
              name="name"
              className="bg-gray-100 text-gray-950 p-2 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="linear"
            />
            
            <input
              onChange={onchange}
              value={data.email}
              type="email"
              placeholder="Email"
              name="email"
              className="my-4 p-2 bg-gray-100 text-gray-950 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-easing="linear"
            />

            <textarea
              onChange={onchange}
              value={data.message}
              name="message"
              className="bg-gray-100 p-2 w-full text-gray-950 rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="linear"
              placeholder="Message"
              rows="10"
            ></textarea>
            <button
              type="submit"
              className="text-white group border w-full px-6 py-3 my-2 flex items-center justify-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
            >
              Send Message
              <span className="group-hover:translate-x-1 duration-300">
                <IoSendSharp className="ml-4" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
