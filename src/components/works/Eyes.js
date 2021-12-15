import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';
const Eyes = () => {
  return (
    <div>
      <ScrollToTop />
      <MainImgWrap>
        <img
          src="https://i.imgur.com/i4FGG5F.jpg"
          alt="Untitled-4"
          border="0"
        />
      </MainImgWrap>
      <div>
        <Headline>
          <h2>Eye Dom</h2>
          <h4>Tools: Adobe illustration</h4>
          <h4>
            Eye is one of the way to interact with people. Especially, under
            pandemic situation, people cover their mouth and nose with mask.
            Therefore, eye is only entrance to recognized the person and get
            other's feeling. eyes is one of most common way to read person's
            expression. I believe eye contact is the 'beginning of a
            relationship'. I designed under the theme of eye contact.
          </h4>
        </Headline>
        <ImgWrap>
          <div className="gallery">
            <h4 className="nomal">
              <p>
                <strong>Concept</strong>
              </p>
              When you look closely into the iris, it looks like a crystal. I
              came up with a transparent dome place which is people can meet and
              understand each other. Through this project, I wanted to visualize
              the eye contact through the dome place.
            </h4>

            <img src="https://i.imgur.com/ItEMohB.jpg" alt="pic1" border="0" />

            <h4 className="nomal">
              <p>
                <strong>Color Chart</strong>
              </p>
              When I started observing my eyes, I realized that human eyes were
              very diverse. I made a chart by extracting colors with an eye drop
              tool based on the pictures taken from my classmate's eyes. After
              making the chart, I realized that the eye color was completely
              different from everyday life. Also, we hardly recognize their
              colors until we make eye contact.
            </h4>
            <img src="https://i.imgur.com/16coUDA.jpg" alt="color chart" />

            <h4 className="nomal">
              <p>
                <strong>Art Work</strong>
              </p>
              Based on that idea, I think using a dome made with plastic panel
              and steel frame to stimulate a person’s eye-lens. The ceiling is
              painted black as color-like the human eye pupil which is to allow
              the audience to focus on the screen.
            </h4>
            <img src="https://i.imgur.com/9MaOU3H.jpg" alt="color chart" />
            <h4 className="nomal">
              To operate this space, the special eyeglass is needed, which is
              can capture companion 's iris and sent it to the projector. The
              eyeglass looks like this, on the upper right side has a scanner of
              the user's iris. The frame is made of titanium so it has
              flexibility and very light to wearing during this space.
              {/* The dome will be blank, till participants scanned their companion's
            iris through the eyeglass. When the eyeglass scanned the colors, it
            will send color information to to the projector. After then, the
            dome space will be reflected participant iris' color on the wall.
            The participant will feel they are inside of companion's space and
            it give a chance to deeply understand about each other. The eyeglass
            looks like this, on the upper right side has a scanner of the user's
            iris. The frame is made of titanium so it has flexibility and very
            light to wearing during this space. */}
            </h4>
            <img src="https://i.imgur.com/P8OTlMC.jpg" alt="color chart" />
            <h4 className="nomal">
              The dome will be blank, till participants scanned their
              companion's iris through the eyeglass. When the eyeglass scanned
              the colors, it will send color information to to the 360 degree
              projector hanging on the top of dome. After then, the dome space
              will be reflected participant iris' color on the wall. From being
              inside that individual’s eye that is being projected on the wall
              give a sense of closeness between those other people inside the
              dome and that person whose eye is projected on the wall.
            </h4>
            <img src="https://i.imgur.com/Ix5JBx0.png" alt="color chart" />
          </div>
        </ImgWrap>
        <Button>
          <h4>
            Through this project, I had an opportunity to think about human
            interactions even in desperate situations. Also, it was an
            opportunity for me to think about how technology can connect people
            to people with the intimate way. Although I haven't actually
            implemented it, I want to make it someday.
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
  height: 44vw;
  img {
    position: absolute;
    left: -15%;
    width: 128%;
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
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
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

export default Eyes;
