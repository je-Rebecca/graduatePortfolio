import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';
const WordMemory = () => {
  return (
    <div>
      <ScrollToTop />
      <Headline>
        <h2>WordMemory</h2>
        <h4>Tools: javascript, html, css</h4>
        <h4>
          WordMemory Site :&nbsp;&nbsp;
          <Link class="herLink" to="https://je-rebecca.github.io/dictionary/">
            Url
          </Link>
        </h4>
        <h4>
          I read article that says if you keep seeing the words about 20 times,
          the words can easily saved on your brain. This motivated me to make
          memorized words app. Among the different app design, I decided to make
          a dashboard style app. Because I want to check the words frequently
          when I using my laptop.
        </h4>
        <h4>
          As you see the mock up image, I have added an "advisor" above to
          encourage motivation. I designed it so that I could check the time
          from time to time with a watch, and I also created a section called
          Today's Resolution to increase the probability of reaching the goal.
          Below that, I put a list of words to memorize today so that I can find
          out whether I memorized them or not through a check mark.
        </h4>
        <div className="gallery">
          <img
            class="narrow "
            src="https://i.imgur.com/DMjZyDS.jpg"
            alt="dfrat"
          />
        </div>
      </Headline>
      <ImgWrap>
        <h4 className="nomal">
          <p>
            <strong> &nbsp; Result</strong>
          </p>
          Actual app looks like this. The background of this app continues to
          rotate randomly four images.{' '}
        </h4>
        <div className="gallery">
          <img src="https://i.imgur.com/uKWfhzt.jpg" alt="img" />
        </div>
        <h4 className="nomal">
          When you enter the words in the list, displays the total word count at
          the bottom of the list. Pressed check box, text colored grayish and
          appeared lines on top of that. If you put the mouse on edge of words,
          the 'X' button will pop up for deleting.
        </h4>
        <div className="gallery">
          <img
            class="narrow"
            src="https://i.ibb.co/VNBzXT1/ddd.gif"
            alt="img"
          />
          <h4 className="nomal">
            <p>
              <strong> &nbsp; Code</strong>
            </p>
            This app save the data at the site cookie with words and meaning.
            Because, saving at site cookie to user can keep the word that they
            want to memorized until they totally learned. Also, the words and
            meaning will be saved separately at the cookie. <br /> <br />
            So I set the logic how to distinguished words and meaning which was
            typed one sentence by user. When the user put the semicolon(:) in
            the middle of words and meaning, the computer will be divided by
            semicolon, and first part of division will be saving words and last
            part be added at meaning.
          </h4>
          <img src="https://i.ibb.co/3ByNK5z/111.jpg" alt="img" />
        </div>
      </ImgWrap>
      <Button>
        <h4>
          As you can see, I tried to put many feature on my Word Memory app.
          Although it looks like simple app, I kept think about saving way and
          how to make efficient app.
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
  .herLink {
    color: blue;
    text-decoration: underline;
  }
`;
const ImgWrap = styled.div`
  max-width: 100%;
  padding: 4vw;
  .nomal {
    text-align: left;
    font-weight: 100;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
    width: auto;
    .narrow {
      width: 85%;
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
export default WordMemory;
