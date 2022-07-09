import React, { useContext } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
// import { MdAccountTree, MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
// import { VscCompassActive } from "react-icons/vsc";
import { HiPresentationChartBar } from "react-icons/hi";
// import { BsCalendar2EventFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import styled from "styled-components";
import { GlobalState } from "../../../ContexGlobal/Global";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../ReduxGlobal/Global";

const MobileSide = () => {
  const { mobDisplay } = useContext(GlobalState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {mobDisplay ? (
        <MobileContainer>
          <MobileWrapper>
            <NavsCtrl>
              <MainNav to="/">
                <Nav>
                  <IconHold>
                    <AiFillDashboard />
                  </IconHold>
                  <span>Overviwe</span>
                </Nav>
              </MainNav>
              <MainNav to="/teachers">
                <Nav>
                  <IconHold>
                    <GiTeacher />
                  </IconHold>
                  <span>Teachers</span>
                </Nav>
              </MainNav>
              <MainNav to="/students">
                <Nav>
                  <IconHold>
                    <IoIosPeople />
                  </IconHold>
                  <span>Students</span>
                </Nav>
              </MainNav>
              <MainNav to="/parents">
                <Nav>
                  <IconHold>
                    <RiParentLine />
                  </IconHold>
                  <span>Parents</span>
                </Nav>
              </MainNav>
              {/* <MainNav>
                <Nav>
                  <IconHold>
                    <MdAccountTree />
                  </IconHold>
                  <span>Account</span>
                </Nav>
              </MainNav> */}
              <MainNav to="/class">
                <Nav>
                  <IconHold>
                    <SiGoogleclassroom />
                  </IconHold>
                  <span>Class</span>
                </Nav>
              </MainNav>
              {/* <MainNav>
                <Nav>
                  <IconHold>
                    <MdSubject />
                  </IconHold>
                  <span>Subjects</span>
                </Nav>
              </MainNav>
              <MainNav>
                <Nav>
                  <IconHold>
                    <VscCompassActive />
                  </IconHold>
                  <span>Class Routine</span>
                </Nav>
              </MainNav> */}
              <MainNav to="/expenses">
                <Nav>
                  <IconHold>
                    <HiPresentationChartBar />
                  </IconHold>
                  <span>Expenses</span>
                </Nav>
              </MainNav>
              {/* <MainNav>
                <Nav>
                  <IconHold>
                    <BsCalendar2EventFill />
                  </IconHold>
                  <span>Events</span>
                </Nav>
              </MainNav> */}
              <MainNavOut
                onClick={() => {
                  dispatch(logOut());
                  navigate("/");
                }}
              >
                <Nav>
                  <IconHold>
                    <FaPowerOff />
                  </IconHold>
                  <span>Log Out</span>
                </Nav>
              </MainNavOut>
            </NavsCtrl>
          </MobileWrapper>
        </MobileContainer>
      ) : null}
    </div>
  );
};

export default MobileSide;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    /* background-color: darkorange; */
    background-color: #031e3e;
    width: 200px;
    position: fixed;
    font-family: poppins;
  }
`;
const MobileWrapper = styled.div``;

const NavsCtrl = styled.div``;
const MainNav = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */

  cursor: pointer;
  &.active {
    background-color: #ffa301;
  }
`;

const MainNavOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */

  cursor: pointer;
`;

const IconHold = styled.section`
  color: #ffa301;
`;

const Nav = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  span {
    font-size: x-small;
    font-weight: 400;
    margin-left: 5px;
    color: #fff;
  }
`;
