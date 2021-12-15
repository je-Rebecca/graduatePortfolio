import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <div>
      <P>
        {' '}
        JoEun's Website Made with React.js <br />
        deployed by Heroku <br /> Made in 2021
      </P>
    </div>
  );
};

const P = styled.p`
  font-size: 10pt;
  font-family: monospace;
`;
export default Footer;
