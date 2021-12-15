import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ScrollToTop from '../../ScrollToTop';

const BookTemplate = () => {
  return (
    <div>
      <ScrollToTop />
      <img
        src="https://i.imgur.com/kk47jwT.jpg"
        alt="Tumbnails"
        border="0"
        width="500px"
      />
      <Headline>
        <h2 className="Title"> Ipad Book Listing Template </h2>
        <h4>Tools: Illustration </h4>
        <h4>Made at : Jan . 2021 </h4>
        <h4>
          {' '}
          I use my Ipad to summary or record, especially the book that I read.
          So I decide to make my own style template to use.
        </h4>
      </Headline>
      <ImgWrap>
        <div className="gallery">
          <h4 className="nomal">
            <p className="subtitle">
              <strong>Sketch</strong>
            </p>
            The main features that I need is book-listing that make me can see
            my pattern of reading book. Also, I need big space to add chart and
            record the simple details of books such as author, publish company.
            Also, I want to simple design that I not disturbed to summarize the
            book.
          </h4>
          <img src="https://i.imgur.com/8oswyKu.jpg" alt="pic1" border="0" />
          <br />
          <h4 className="nomal">
            So It is consist 4 pages. The first page is the cover of this
            template, I made left huge space to add the book covers that I read.
            That make the unique cover. Second page is book listing that I read,
            title, sort, author and dates. Third and Fourth pages are for
            contents of the book.
          </h4>
          <br />
          <h4 className="nomal">
            <p className="subtitle">
              <strong> Result </strong>
            </p>
            As you see below, I have been using my template this year.
            Especially I used a lot 3,4 pages Actually, I realized I rarely use
            the Book Listing part because it located on the second page so hard
            to reach.
          </h4>
          <Half>
            <img
              class="halfImage"
              src="https://i.imgur.com/uSqnacZ.jpg"
              alt="pic1"
              border="0"
            />
            <img
              class="halfImage"
              src="https://i.imgur.com/m5pDr4a.jpg"
              alt="pic1"
              border="0"
            />
          </Half>
          <Half>
            <img
              class="halfImage"
              src="https://i.imgur.com/WBdgW0Q.jpg"
              alt="pic1"
              border="0"
            />
            <img
              class="halfImage"
              src="https://i.imgur.com/bZ1mWR0.jpg"
              alt="pic1"
              border="0"
            />
          </Half>
          <br />
          <h4 className="nomal">
            <p>
              <strong> &nbsp; Extention </strong>
            </p>
            Base on my experience, I amend some part of the design and decide to
            upload on the actual market to see what the other person's though of
            my template. Also, I wanted to get feedback from user. So I found
            that people sell their ipad template on the Etsy site. So, I signed
            up and made the promotion image.
          </h4>
          <img src="https://i.imgur.com/nXDivIx.jpg" alt="pic1" border="0" />
          <h4 className="nomal">
            Base on my experience, I amend some part of the design and decide to
            upload on the actual market to see what the other person's though of
            my template. Also, I wanted to get feedback from user. So I found
            that people sell their ipad template on the Etsy site. So, I signed
            up and made the promotion image think about sell cheapest price.
          </h4>
          <img src="https://i.imgur.com/S0Fk1Yy.jpg" alt="pic1" border="0" />
          <h4 className="nomal">
            Unfortunately, I couldn't upload it. Because some country they can't
            open new shop because Etsy policy changed payment. Although I can't
            verify my design at this site, I will keep asking my friend who uses
            ipad. Base on that feedback I want to make the useful template that
            user like it
          </h4>
        </div>
      </ImgWrap>
      <Button>
        <h4>
          Through this experience I though that there are many designs to daily
          life. I designed this template for my comfort. However, it makes me to
          curious other user's think. Made me what is the good design, I believe
          the design is let the person feel easy to use and stuck on my
          template. This experience makes me think about how the market goes,
          which age group might use it, what the user needs and which color they
          their preference.
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
const Half = styled.div`
  display: flex;
  width: 100%;
  max-width: 48%;
  flex-direction: row;
  .halfImage {
    width: 50%;
    padding: 0.5rem;
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
export default BookTemplate;
