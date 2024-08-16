import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo'; // Import the logo

const About = ({ image = logo, about = "Default about text" }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string
};

export default About;
