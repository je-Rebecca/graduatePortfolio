import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const ResumeSite = () => {
  return (
    <div>
      <ScrollToTop />
      <img
        src="https://i.imgur.com/HSD8InX.jpg"
        alt="Tumbnails"
        border="0"
        width="500px"
      />
      <Headline>
        <h2 className="Title">Resume Site made by Coding</h2>
        <h4>
          Tools: javascript, React FrameWork.
          <br />
          Dependencies : i18next, bootstrap, plotly
          <br />
          Deply by Heroku
          <br />
          Date : August, 2021
          <br />
          <Link className="herLink" to="https://portfolios-cv.herokuapp.com/">
            Resume Project Url
          </Link>
        </h4>
        <h4>
          This resume site focuses on coding experience and education. At that
          time, I created and designed this app with React framework to get the
          next career. Please note, this portfolio focuses on resume site
          characteristics, not content.
        </h4>
      </Headline>
      <ImgWrap>
        <div className="gallery">
          <h4 className="nomal">
            <p className="subtitle">
              <strong>Sketch</strong>
            </p>
            To build my resume site, I researched trend of resume homepage and
            found that most of them consisted with Profile, Experience,
            Projects. I sketched one page site as you can see below, It can
            navigate each section through the top buttons. Each section show
            about me such as information about me, the skills that I have, my
            linked experience and toy projects.
          </h4>

          <img src="https://i.imgur.com/1uJR9fp.jpg" alt="pic1" border="0" />

          <h4 className="nomal">
            <p className="subtitle">
              <strong> Main Features</strong>
            </p>
            I would like to emphasize three characteristics of this site: screen
            converting through navigation buttons, language switch according to
            the user's choice, and site layout changed according to the screen
            size.
            <br />
            <br />
            <p>
              <strong> &nbsp; 1. Navigation</strong>
            </p>
            On the right side of the header, there are four buttons that can be
            easily moved to each section. These are linked to each field. In
            particular, clicking the 'Profile' button allows you to quickly move
            to the top section when the scroll bar is located at the bottom.
          </h4>
          <iframe
            src="https://player.vimeo.com/video/647766125?h=5e28ef818a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="100%"
            height="500px"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="navbar.mp4"
          />

          <h4 className="nomal">
            <p>
              <strong> &nbsp; 2. Internationalization</strong>
            </p>
            <br />
            When I devise this site, I wanted to do bilingual service using
            i18n(Internationalization) library. Saved English and Korean data
            are shows on the screen when user press each flag icon.
          </h4>
          {/* <div width="100%"> */}
          <iframe
            src="https://player.vimeo.com/video/647770460?h=d4812f938a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            // display="block"
            width="100%"
            height="600px"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Language"
          ></iframe>
          {/* </div> */}

          <h4 className="nomal">
            <p>
              <strong> &nbsp; 3. Responsive Site</strong>
            </p>
            The layout is converted according to the screen size. The breakpoint
            I set is 600px. If the width is less than 600px, the layout of the
            skill chart and experience content changes vertically. Conversely,
            the size of 600px or more changes horizontally.
          </h4>
          <img src="https://i.imgur.com/AwDNFyz.gif" alt="color chart" />
          <h4 className="nomal" color="red">
            >>> Although one page, I divide serveral components such as
            FrontSkills, Profiles.
          </h4>
          <img src="https://i.imgur.com/66rq6CE.jpg" alt="color chart" />
        </div>
      </ImgWrap>
      <Button>
        <h4>
          Although It took some time to finish the project, I learned chart and
          language change library so called 'Ploty' and 'I18N'. Also, During
          this project I experienced the common process make the site like
          research the trend of job resume site, design blueprint and made the
          final result with coding also, Deploy on the site with Heroku site.
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
  );
};

const Headline = styled.div`
  .title {
    font-size: 1.8rem;
  }
  padding: 0 4vw;
  h2 {
    text-align: left;
    font-weight: 100;
  }
  h4 {
    text-align: left;
    font-weight: 100;
  }
  .herLink {
    color: blue;
    text-decoration: underline;
  }
`;
const ImgWrap = styled.div`
  max-width: 100%;
  padding: 4vw;
  .nomal {
    font-weight: 100;
    text-align: left;
    margin: 0;
    .subtitle{
      font-size="1.3rem"
    }
    .zeroMargin {
      margin: 0;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 1.5vw;
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

export default ResumeSite;
