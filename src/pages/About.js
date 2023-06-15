import React from 'react';
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: '70%' }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="text-heading">University of Science</h1>
          <h3 className="text-heading">Group 6</h3>
        </div>
      </div>
    </Layout>
  );
};

export default About;
