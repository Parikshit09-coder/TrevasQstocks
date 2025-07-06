import React from 'react';

function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Contact Me</h1>

      <div className="mb-8 space-y-2">
        <p><strong>Email:</strong> <a href="mailto:gurudesai2005@gmail.com" className="text-blue-600">gurudesai2005@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 9997431010</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/parikshit-desai-7abb1328a/" target="_blank" className="text-blue-600">linkedin.com/in/parikshit-desai</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Parikshit09-coder" target="_blank" className="text-blue-600">github.com/Parikshit09-coder</a></p>
      </div>

      <form
        action="https://formspree.io/f/mpwreolz" 
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
