import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const GuideDesign = () => {
  return (
    <div>
      <ScrollToTop />
      <MainImgWrap>
        <img
          src="https://i.imgur.com/2txY2Ug.jpg"
          alt="Untitled-4"
          border="0"
        />
      </MainImgWrap>
      <div>
        <Headline>
          <h2>Living Guide</h2>
          <h4>Tools: Adobe Photoshop, Indesign </h4>
          <h4>2019 </h4>
          <h4>
            Living Guide is a guidebook about neighborhood living intended for
            the new tenant or owner. When I worked in a real estate company, we
            give the guide for them. That time(2019), company had an old
            template which is made byusing MSWord program. I then updated
            information first and redesign the format using design tools.
          </h4>
        </Headline>
        <ImgWrap>
          <div className="gallery">
            <h4 className="nomal">
              <p>
                <strong>Art Work</strong>
              </p>
              For the First page of living guide, I took the downtown New York
              City view myself.
            </h4>
            <img src="https://i.imgur.com/lIYXXdg.jpg" alt="color chart" />
            <h4 className="nomal">
              This guide contains information on how to settle down to unit such
              as utilities, cable information, and transportation and restaurant
              near downtown especially in Battery Park City.
            </h4>
            <img src="https://i.imgur.com/aY5ipaR.jpg?1" alt="color chart" />
            <h4 className="nomal">
              I add the color on the edge of the page to distingust each
              subtitle. It is designed to quickly search for information using a
              uniform layout.
            </h4>
            <img src="https://i.imgur.com/QbNN4uM.jpg" alt="color chart" />
          </div>
        </ImgWrap>
        <Button>
          <h4>
            When I made this guide, I thought about what information readers
            need from this guide. I wanted to see the reader keep this guide as
            long as they can and how the guide can be useful to them. So, I
            added local bus services map with route of bus and maps. Also, I
            really considered whether dose this guide can be interesting and
            what is the suitable amount of information. That time I was study of
            adobe Indesign, so I learned the color are different with computer
            screen and actual print. So, I used the CMYK color set up and try to
            print similar as much as the screen.
            {/* When I made this guide, I thought about what information reader needs
          from this guide. Which factor let the reader keep this book as long as
          they can and how it can be useful to them. So I tried to added
          accurate as much as I can put such as route of bus and maps. Also, I
          really considered whether dose this book is bored because of to much
          information. That time I was study of Adobe Indesign, so I used the
          CMYK set up and care how it looks like when I print it.  => 내가씀 */}
            <br />
            <br /> It was a really satisfying experience, starting with taking
            pictures and drawing images if necessary, as well as finding and
            putting information. Because everything was done through me.
          </h4>
        </Button>
        <NavBar>
          <Link to="">
            <div class="flex">
              <div className="arrow">
                <MdKeyboardArrowLeft />
              </div>
              <h2>Title1</h2>
            </div>
          </Link>
          <Link to="">
            <div class="flex">
              <h2>Title2</h2>
              <div className="arrow">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </Link>
        </NavBar>
      </div>
    </div>
  );
};

const Headline = styled.div`
  padding: 0 4vw;
  h2 {
    text-align: left;
    font-weight: 100;
  }
  h4 {
    text-align: left;
    font-weight: 100;
  }
`;
const MainImgWrap = styled.div`
  position: relative;
  height: 40vw;
  img {
    position: absolute;
    left: -4%;
    width: 105%;
    height: 100%;
  }
`;
const ImgWrap = styled.div`
  max-width: 100%;
  padding: 4vw;
  .nomal {
    font-weight: 100;
    text-align: left;
    margin: 0;
    .zeroMargin {
      margin: 0;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
    width: auto;
    img {
      width: 80%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
  }
`;
const Button = styled.div`
  h4 {
    padding: 0 4vw;
    text-align: left;
    font-weight: 100;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4vw;
  h2 {
    font-weight: 100;
  }
  .flex {
    display: flex;
    .arrow {
      width: 18px;
      padding-right: 35px;
      padding-top: 1rem;
      font-size: 2rem;
    }
  }
`;

export default GuideDesign;
