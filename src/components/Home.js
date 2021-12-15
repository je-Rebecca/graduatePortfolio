import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <WorkWrap>
      <div>
        <Link to="/works/RGBColorLight">
          <Hover>
            <img src="https://i.imgur.com/PoJNPL2.jpg" alt="img" />
          </Hover>
          <h3>Color Light 2021 [Arduino ]</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/Road">
          <Hover>
            <img src="https://i.imgur.com/rjuTW5g.jpg" alt="img" />
          </Hover>
          <h3>Road Gear 2021 [Arduino]</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/Eyes">
          <Hover>
            <img
              src="https://i.ibb.co/FXwpbZX/thumb.jpg"
              alt="thumb"
              border="0"
            />
          </Hover>
          <h3>Eye Dome 2021</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/Pamphlet">
          <Hover>
            <img src="https://i.imgur.com/ytgIXBd.jpg" alt="img" />
          </Hover>
          <h3>Pamphlet 2019</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/NewsLetters">
          <Hover>
            <img src="https://i.imgur.com/MW34ai1.png" alt="img" />
          </Hover>
          <h3>NewsLetter 2020</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/GuideDesign">
          <Hover>
            <img src="https://i.imgur.com/zoUGY31.jpg" alt="img" />
          </Hover>
          <h3> CCG Living Guide 2019</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/CommunityApp">
          <Hover>
            <img src="https://i.imgur.com/Z0izlWT.jpg" alt="img" />
          </Hover>
          <h3>Empty Nester 2021</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/studyCafeApp">
          <Hover>
            <img
              src="https://i.ibb.co/FhbHYCn/Untitled-4.jpg"
              alt="Untitled-4"
              border="0"
            />
          </Hover>
          <h3>Gong Do GGeok 2020 [Case Study]</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/ResumeSite">
          <Hover>
            <img src="https://i.imgur.com/meXSOrf.jpg" alt="img" />
          </Hover>
          <h3>Resume [Coding] 2021</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/Carebnb">
          <Hover>
            <img src="https://i.imgur.com/qBu8HwE.jpg" alt="img" />
          </Hover>
          <h3>CareBnb [Coding] 2021</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/movieApp">
          <Hover>
            <img src="https://i.imgur.com/be5uKld.jpg" alt="img" />
          </Hover>
          <h3>Movie App [Coding] 2021</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/memoryApp">
          <Hover>
            <img src="https://i.imgur.com/VI67uck.jpg" alt="img" />
          </Hover>
          <h3>Word Memory App [Coding] 2021</h3>
        </Link>
      </div>
      <div>
        <Link to="/works/BookTemplate">
          <Hover>
            <img src="https://i.imgur.com/FqIkXzV.jpg" alt="img" />
          </Hover>
          <h3>Ipad Book Template</h3>
        </Link>
      </div>
    </WorkWrap>
  );
};

const WorkWrap = styled.div`
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 90px;
  grid-row-gap: 65px;
  grid-auto-rows: min-content;

  img {
    width: 100%;
  }
  h3 {
    text-align: left;
    font-weight: 100;
  }
`;
const Hover = styled.div`
  opacity: 1;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
export default Home;
