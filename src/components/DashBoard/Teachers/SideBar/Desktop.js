import React from "react";
import styled from "styled-components";
import { AiFillDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscCompassActive } from "react-icons/vsc";
import { BsCalendar2EventFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../ReduxGlobal/Global";

const Desktop = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <NavsCtrl>
          <MainNav to="/">
            <Nav>
              <IconHold>
                <AiFillDashboard />
              </IconHold>
              <span>Overview</span>
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
          <MainNav to="/allclass">
            <Nav>
              <IconHold>
                <SiGoogleclassroom />
              </IconHold>
              <span>All Class</span>
            </Nav>
          </MainNav>
          <MainNav to="/classsubject">
            <Nav>
              <IconHold>
                <MdSubject />
              </IconHold>
              <span>Subjects</span>
            </Nav>
          </MainNav>
          <MainNav to="/routine">
            <Nav>
              <IconHold>
                <VscCompassActive />
              </IconHold>
              <span>Class Routine</span>
            </Nav>
          </MainNav>
          <MainNav to="/events">
            <Nav>
              <IconHold>
                <BsCalendar2EventFill />
              </IconHold>
              <span>Events</span>
            </Nav>
          </MainNav>
          <MainNav to="/myprofile">
            <Nav>
              <IconHold>
                <CgProfile />
              </IconHold>
              <span>My Profile</span>
            </Nav>
          </MainNav>
          <MainNavOut to="">
            <Nav
              onClick={() => {
                dispatch(logOut());
                //   // navigate("/home");
              }}
            >
              <IconHold>
                <FaPowerOff />
              </IconHold>
              <span>Log Out</span>
            </Nav>
          </MainNavOut>
        </NavsCtrl>
      </Wrapper>
    </Container>
  );
};

export default Desktop;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: #031e3e;
  width: 180px;
  font-family: poppins;
  position: fixed;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div``;

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
  text-decoration: none;
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
