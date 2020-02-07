import React from 'react';

const About = ({match}) => {
  return (
    <div>
      {match.params.userid} 's Profile
    </div>
  );
};

export default About;