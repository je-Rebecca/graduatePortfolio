import React from 'react';
// import './Header.style.sass';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrap className="wrap">
      <Link to="/">
        <div>JoEun's ArtWork</div>
      </Link>
      <div>
        <Link to="/work" id="pad">
          Work
        </Link>
        <Link to="/Resume" id="pad">
          Resume
        </Link>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  #pad {
    padding: 0 2rem;
  }
`;

export default Header;
