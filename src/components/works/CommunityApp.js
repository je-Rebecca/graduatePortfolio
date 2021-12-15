import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
// import Chart from '../../assets/svgchart.svg';
// import Draft from '../../assets/draft.svg';
import ScrollToTop from '../../ScrollToTop';
const CommunityApp = () => {
  return (
    <div>
      <ScrollToTop />
      <MainImgWrap>
        <img
          src="https://i.imgur.com/AbMMHQ2.jpg"
          alt="Untitled-4"
          border="0"
        />
      </MainImgWrap>
      <div>
        <Headline>
          <h2>Community App "Empty Nest" [Case Study]</h2>
          <h4>Time : Augest. 2021 - November.2021 </h4>
          <h4>Work Definition : design (figma) </h4>
          <h4>
            Link :
            <Link
              class="herLink"
              to="https://www.figma.com/proto/U0d3vP5oc9FwR78uM8EqNt/Untitled?node-id=111%3A1777&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A45"
            >
              Figma Prototype
            </Link>
          </h4>
          <h4>Make the communicating app for the senior. </h4>
          <h2>Motive</h2>
          <h4>
            This year, I had a chance to talk with the retired couple. That
            couple know my friends and They talked about their travelling and
            their experience to my friend and me. After we finished the
            conversation, I just realized they really enjoy talking even they
            don't know well about me.{' '}
            <b>
              That's made me think about the application that seniors can use.
              Through the dialogue I realized what they want is talking someone
              to share their experience at the same time learn new stuff. Also,
              they worried about pandemic because they are hazardous for them.{' '}
            </b>{' '}
            <br />
            <br />
            <h2>Concept</h2>
            The main goal of this project is make the place to communicating
            without meet in person. Also, this app is for the senior who want to
            meet new people to get or share retired activities information such
            as gardening, hobbies, charity, health and so on. This app is named
            emtpy nester, it looks like this, I try to put the simple feature
            for the senior.
          </h4>
        </Headline>
        <ImgWrap>
          <h2>Sketch</h2>
          <br />
          <h4 className="nomal">
            I tried to put the simple features for retiree. Main features are{' '}
            <u>Home, Search and mypage.</u>
            <br />
            <br />
            1. Home
            <br /> The Home has list of rooms. Each rooms shows how many people
            can enter it. Once the room is clicked, the room has two sectors :
            talker and listener. Also, they can see individual person's profile
            once clicked their picture.{' '}
          </h4>
          <br />
          <br />
          <div className="gallery">
            <img
              src="https://i.imgur.com/zJw2z39.jpg"
              alt="thumb1"
              border="0"
            />
            <h4 className="nomal">
              2. My page
              <br />
              Regarding of My page can update profile image and introduction.
              Also, Sharing my interest category. There is a pin feature which
              record chats or images which get from group chat.
              <br />
              <br />
              3. Search
              <br />
              In Search section, people can easily search what user wants to
              visit using categories.
              <br />
              If user wishes to make their own room, they can make freely by
              clicking the 'create room' button at Home and added title,
              category, people number and time.
              <br />{' '}
            </h4>
            <img
              src="https://i.imgur.com/DyUQ26z.jpg"
              alt="thumb2"
              border="0"
            />
            <h4 className="nomal">
              Message feature is also available. Because I thought users want to
              talk directly to the person. But, this is for the elder, when user
              speak, the message is autotype by the person's speaking on the
              chat box. so retirees can use handily.
              <br />
              <br />
              Lastly, I made Logos which user can link with app' name. The icon
              of this app embodies a nest overlooked from above. Simple nest
              icon will remind app' identity and meaning. Finally, the 'Empty
              Nest' image is the first picture user sees when the app is on.
              This simple shows the name of the app and the side of the nest.
              <br />{' '}
            </h4>
            <img
              src="https://i.imgur.com/DyZjfXA.jpg"
              alt="thumb3"
              border="0"
            />
            <h2>ProtoTyopes</h2>
            <h4 className="nomal">
              Base on the sketch, I made prototypes via Figam
            </h4>
            <img src="https://i.imgur.com/W1hs9Xg.jpg" alt="Figma" border="0" />
            <h2>
              Details
              <br />
            </h2>
            <h4 className="nomal">
              <p>
                I put the cute bird image to let the retiree feel fun and mild.
                Most of the functions were implemented as sketched. Each room
                has host who is open the room. they can manage the room such as
                close it or control amount number of people.Listener can
                participate in chat, there is mic button on the chat. So, if
                retiree pressed, their saying will be automatically type on the
                chat.
              </p>{' '}
            </h4>
            <img src="https://i.imgur.com/ggAfe13.jpg" alt="img" border="0" />
            <h4 className="nomal">
              <p>
                {' '}
                If user wonder about the speaker, they can check their
                introduction by clicking the profile image. The profile images
                shows which part they are interested or want to know. If they
                want to 1:1 talk, they can press message button. <br />
                On the Mypage I want to emphasize the Pins. For example, when
                people talk about how to make the delicious recipe they just
                pinned it. Then it will be collected on Pins section. They can
                check anytime, although that room is closed.
              </p>
            </h4>
            <img src="https://i.imgur.com/ClJl7La.jpg" alt="img" border="0" />
            <h4 className="nomal">
              <p>
                [Searching the room] <br />
                When the magnification icon is pressed, user can find room via
                category. Such as Hobby, Travel, Health.{' '}
              </p>{' '}
            </h4>
            <img src="https://i.imgur.com/sK6gPzD.jpg" alt="img" border="0" />
            <h4 className="nomal">
              <p>[Creating the room]</p>{' '}
            </h4>
            <img src="https://i.imgur.com/LHv9WDm.jpg" alt="img" border="0" />
            <h2>Color </h2>
            <h4 className="nomal">
              I mainly used the brown and green color. Because Nest is brownish
              color and greenish color is matched well with brown. I believe
              these two color combinations make the user feel comfortable.
            </h4>
            <img src="https://i.imgur.com/DcAGh1A.jpg" alt="gong" border="0" />{' '}
            <div class="vedioFlex">
              <div>
                <p>Main Features : Home, MyPage and Search </p>
                <img
                  src="https://i.imgur.com/pxTi066.gif"
                  alt="gong-1"
                  border="0"
                />
              </div>
              <div>
                <p>Create room </p>

                <img
                  src="https://i.imgur.com/qAjV9Es.gif"
                  alt="gong-2"
                  border="0"
                />
              </div>
            </div>
          </div>
        </ImgWrap>
        <br />
        <br />
        <Buttom>
          <h2>What I learned </h2>
          <h4>
            I enjoyed the whole process of devising and designing, especailly,
            'Empty Nester' words gave me a diverse idea. However, at the same
            time, this concept made me limited on thinking about design like,
            'should I put the bird picture instead of a profile?' 'Should I
            named the room as a nest?' That make think about 'How much the
            concept and idea should be applied to the app.'
            <br />
            <br />
            This project let me think about what is the retiree really wants,
            which layout will be helpful for them.
            <br />
            <br />
            Currently It's just an idea and prototype. Now I don't have a chance
            to meet the retired couple, but I want to get feedback someday.
            Furthermore, I want to implement this idea in real life.
          </h4>
        </Buttom>
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
  .herLink {
    color: blue;
    text-decoration: underline;
  }
`;
const MainImgWrap = styled.div`
  position: relative;
  height: 45vw;
  img {
    position: absolute;
    left: -4%;
    width: 112%;
    height: 100%;
  }
`;
const ImgWrap = styled.div`
  max-width: 100%;
  padding: 4vw;
  h2 {
    text-align: left;
    font-weight: 150%;
    margin: 0;
  }
  .hor {
    display: flex;
  }
  .nomal {
    font-weight: 100;
    text-align: left;
    margin: 0;
    .zeroMargin {
      margin: 0;
    }
  }
  .vedioFlex {
    display: flex;
    div {
      width: 50%;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;
    width: auto;
    h1 {
      background: radial-gradient(
        circle,
        rgba(237, 238, 174, 1) 0%,
        rgba(233, 200, 148, 0.8666170634920635) 100%
      );
      margin: 0;
      padding: 10 px;
      text-align: left;
    }
    img {
      width: 80%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
      margin: auto;
    }
  }
`;
const Buttom = styled.div`
  h4 {
    padding: 0 4vw;
    text-align: left;
    font-weight: 100;
  }
  h2 {
    padding: 0 4vw;
    text-align: left;
    font-weight: 150%;
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
export default CommunityApp;
