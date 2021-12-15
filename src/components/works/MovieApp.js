import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';
const MovieApp = () => {
  return (
    <div>
      <ScrollToTop />
      <Headline>
        <h2>MovieApp</h2>
        <h4>Tools: React, html, css</h4>
        <h4>Filtering the New released movie.</h4>
        <h4>
          This app shows newly released movies by country. I made this app to
          practice how to use 'Movie API' on code. Instead, use genre as
          criteria for filtering the movie, I chose the language. Because I care
          the language to choose movies. I believe filter by language is helpful
          who select the movie for learning language.
          {/* This app shows newly released movies by country. I made this app to
          practice how to use 'Movie api' on code. Instead use genre as criteria
          to filtering the movie, I chose the language. Because that's make this
          app looks unique. If, pressed the Italian button, it shows Italian
          movie. Also, clicking the movie icon at the top it shows every movie
          regardless of language. */}
          <br />
          <br />
          {/* As the movie api reflects the movie trend, this app shows a different
          list of data every month. As you can see below, only English and
          Italian movies are currently being released. */}
        </h4>
      </Headline>
      <ImgWrap>
        <div className="gallery">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/653679407?h=8177e3244f"
            width="100%"
            height="500px"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <h4 className="nomal">
            If, pressed the Italian button, it shows Italian movie. Also,
            clicking the movie icon at the top it shows every movie regardless
            of language.
            <br />
            <br />
            As the movie api reflects the movie trend, this app shows a
            different list of data every month. As you can see below, only
            English and Italian movies are currently being released.
          </h4>

          <img src="https://i.imgur.com/psJtZdM.gif" alt="img" />
          <h4 className="nomal">
            <p>
              <strong> &nbsp; Logic</strong>
            </p>
            The api has bundle of data such as id, url, title. First, connect
            the api with this app, and then extract each data by key name. Used
            the filter api to refine its language name. Finally, shows it on the
            screen.{' '}
          </h4>
          <img src="https://i.imgur.com/gWoe18l.png" alt="img" />
          <img src="https://i.imgur.com/H9tXMV1.jpg" alt="img" />
        </div>
      </ImgWrap>
      <Button>
        <h4>
          This project was one of my early work with React framework and api,
          That's why this project is so simple. Also, I realized how much I am
          learned and improved from early of this year to right now (which is
          end of this year)
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
const ImgWrap = styled.div`
  max-width: 100%;
  padding: 0 4vw;
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
    width: auto;
    .nomal {
      text-align: left;
      font-weight: 100;
    }
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
export default MovieApp;
