import React from 'react';

const Content = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-4">Welcome to One_Hire - Your Gateway to Opportunities</h1>
          <h3 className="mb-3">Find Your Dream Job Today!</h3>
          <p className="lead mb-4">
            Are you tired of endlessly searching for the perfect job? Look no further! At One_Hire, we are dedicated to
            connecting job seekers like you with the right opportunities that match your skills and aspirations.
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <h5>Extensive Job Database</h5>
              <p>
                With our vast job database, you'll have access to a wide range of opportunities across various
                industries. From entry-level positions to senior roles, we've got you covered.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Easy Application Process</h5>
              <p>
                Applying for jobs has never been easier. Simply create a profile, upload your resume, and start applying
                to your dream jobs in just a few clicks.
              </p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <h5>Personalized Job Alerts</h5>
              <p>
                Stay ahead of the competition with our personalized job alerts. Receive notifications about job openings
                that match your preferences directly in your inbox.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Expert Career Guidance</h5>
              <p>
                Our team of experienced career advisors is here to support you at every step of your job search journey.
                Get expert tips, interview guidance, and career advice to help you succeed.
              </p>
            </div>
          </div>

          <h3 className="mb-3">Find Your Perfect Fit</h3>
          <p className="lead mb-4">
            Finding the right job can be a life-changing experience. At One_Hire, we are committed to making your job
            search stress-free and rewarding. Join us today and take the first step towards a brighter future.
          </p>

          <div className="mb-5">
            <p className="lead mb-3">For Employers</p>
            <p>
              Are you an employer looking for top talent? One_Hire offers a dedicated platform to showcase your job
              openings and attract the best candidates. Connect with us to explore our employer services.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Get Started Today!</h5>
            <p className="lead mb-4">
              Create your free account and start exploring the countless job opportunities waiting for you. Your dream job
              is just a few clicks away.
            </p>
            <button className="btn btn-primary btn-lg btn-block">Sign Up Now</button>
            <p className="text-center mt-3">Let's get started on your journey to success!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
