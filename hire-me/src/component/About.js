import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us - One Hire</h1>
        <p>Welcome to One Hire, your gateway to finding your dream job and connecting with top employers.</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to bridge the gap between job seekers and employers, making the hiring process efficient and rewarding for both parties. We strive to provide a user-friendly platform where job seekers can explore a wide range of job listings across various industries and locations, while employers can access a pool of talented and motivated professionals.</p>
      </div>

      <div className="about-section">
        <h2>Why Choose One Hire?</h2>
        <ul>
          <li><strong>Extensive Job Listings:</strong> We curate a diverse collection of job listings, catering to various job roles and industries.</li>
          <li><strong>Top Employers:</strong> We partner with reputable companies and organizations, ensuring that you have access to opportunities with some of the best employers in the market.</li>
          <li><strong>Seamless Job Search:</strong> Our intuitive search and filtering options enable you to find relevant jobs quickly and easily.</li>
          <li><strong>Personalized Job Recommendations:</strong> Receive job recommendations tailored to your skills and preferences, increasing your chances of landing your dream job.</li>
          <li><strong>Professional Support:</strong> Our dedicated support team is always available to assist you throughout your job search journey.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Employer Solutions</h2>
        <ul>
          <li><strong>Job Posting:</strong> Showcase your job openings to a vast and diverse talent pool.</li>
          <li><strong>Candidate Screening:</strong> Simplify the candidate screening process with our advanced tools and applicant tracking system.</li>
          <li><strong>Employer Branding:</strong> Enhance your employer brand with a dedicated company profile.</li>
          <li><strong>Recruitment Support:</strong> Our recruitment experts can assist you in identifying the right candidates for your specific requirements.</li>
        </ul>
      </div>

      <div className="about-call-to-action">
        <p>Join One Hire today and embark on a journey towards success and growth. Let One Hire be your partner in finding the perfect fit for your professional endeavors.</p>
        <button>Sign Up / Log In</button>
        <button>Post a Job Listing</button>
      </div>
    </div>
  );
};

export default About;
