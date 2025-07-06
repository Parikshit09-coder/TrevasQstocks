import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">About Me</h1>

      <p className="text-lg mb-4">
        Hello! I'm <strong>Parikshit Desai</strong>, a passionate <strong>third-year IT student</strong> at PICT College with a strong interest in 
        <span className="text-blue-600"> Web Development</span>, 
        <span className="text-green-600"> App Development</span>, and 
        <span className="text-purple-600"> Data Structures & Algorithms</span>. 
        I enjoy solving real-world problems and continuously learning new technologies.
      </p>

      <p className="mb-4">
        I'm experienced in both frontend and backend development, specializing in the <strong>MERN stack</strong>. 
        I’ve also built applications using <strong>React Native</strong>, integrated APIs, and explored domains like <strong>DevOps</strong>, <strong>Firebase</strong>, and <strong>AR/VR</strong>.
      </p>

      <p className="mb-4">
        Notable projects include:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>MedPass – Digital Health Portal</strong>: A secure system for uploading, summarizing, and sharing medical documents with doctors using QR codes.  
            <a className="text-blue-500 underline ml-2" href="https://tinyurl.com/medpass-post" target="_blank" rel="noreferrer">[View Project]</a>
          </li>
          <li>
            <strong>Spotify Clone</strong>: A responsive clone with real-time playback, playlist creation, and music category browsing using Tailwind CSS.
          </li>
          <li>
            <strong>Weather Forecasting App</strong>: Simple 5-day forecast app built using public weather APIs.
          </li>
        </ul>
      </p>

      <p className="mb-4">
        I’ve solved 120+ DSA problems, participated in Smart India Hackathon, and earned a 99.51 percentile in MHT-CET and 96.03 in JEE.
      </p>

      <p className="mb-4">
        Outside tech, I enjoy sports and have represented at zonal levels in <strong>badminton</strong> and <strong>football</strong>.
      </p>

      <p className="mb-6">
        Feel free to connect with me:
      </p>

      <ul className="space-y-2">
        <li><strong>Email:</strong> <a href="mailto:gurudesai2005@gmail.com" className="text-blue-600">gurudesai2005@gmail.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/parikshit-desai-7abb1328a/" target="_blank" rel="noreferrer" className="text-blue-600">linkedin.com/in/parikshit-desai</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Parikshit09-coder" target="_blank" rel="noreferrer" className="text-blue-600">github.com/Parikshit09-coder</a></li>
        <li><strong>Phone:</strong> +91 9997431010</li>
        <li><strong>Resume:</strong> 
          <a
            href="/assets/PARIKSHIT.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 ml-2 underline"
          >
            View / Download
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
