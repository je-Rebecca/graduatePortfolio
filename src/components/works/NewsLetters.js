import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const NewsLetters = () => {
  return (
    <div>
      <ScrollToTop />
      <img
        src="https://i.imgur.com/zznW0me.jpg"
        alt="Tumbnails"
        border="0"
        width="500px"
      />
      <Headline>
        <h2 className="Title">NewsLetters </h2>
        <h4>Tools: html</h4>
        <h4>
          {' '}
          Many real estate companies let their customer to know new listing
          through the email, so I started making the email to promote the new
          rental or sale listings and I called it newsletter.
        </h4>
      </Headline>
      <ImgWrap>
        <div className="gallery">
          <h4 className="nomal">
            <p className="subtitle">
              <strong>Sketch</strong>
            </p>
            This newsletter made with pure html code. It consisted with image,
            listing information and contact information. Use only three colors
            to looks simples. At first I thought to put the logo at the top as
            the other company did, however, when I do that way, the email
            summary only shows logo. That might be causing this email go to spam
            mail. Also, my boss told me that logo is too big, so the receiver
            can be disturbed.
          </h4>

          <img src="https://i.imgur.com/nWRpZ8T.jpg" alt="pic1" border="0" />
          <br />
          <h4 className="nomal">
            <p className="subtitle">
              <strong> Result </strong>
            </p>
          </h4>
          <img src="https://i.imgur.com/igtq7vC.gif" alt="pic1" border="0" />
          <br />
          <h4 className="nomal">
            <p>
              <strong> &nbsp; code </strong>
            </p>
            As I mentioned, it is made with pure html. I typed the code using
            'Visual Studio Code' tools and kept check and update it. After I
            finished coding I put it on the gmail and sent it to company email.
            Finally sent to clients via company email.{' '}
          </h4>
          <img src="https://i.imgur.com/Gk58IZQ.jpg" alt="pic1" border="0" />
        </div>
      </ImgWrap>
      <Button>
        <h4>
          Through this work I learned that some code doesn't apply to the email
          environment. That made me think about which code is suited for my
          sketched. For example, I used 'p ' and 'span' source to make the box,
          but it doesn't apply to email so I used the 'table' source which is
          'tr','td','th'.
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
export default NewsLetters;
