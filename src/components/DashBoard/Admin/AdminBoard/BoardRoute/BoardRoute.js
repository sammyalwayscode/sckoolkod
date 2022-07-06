import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Account from "../BoardComp/Account/Account";
import Attendance from "../BoardComp/Attendance/Attendance";
import Class from "../BoardComp/Class/Class";
import Events from "../BoardComp/Events/Events";
import Overview from "../BoardComp/Overview/Overview";
import Parents from "../BoardComp/Parents/Parents";
import Routine from "../BoardComp/Routine/Routine";
import Students from "../BoardComp/Students/Students";
import Subject from "../BoardComp/Subject/Subject";
import TeacherDetail from "../BoardComp/Teahers/TeacherDetail";
import Teachers from "../BoardComp/Teahers/Teachers";
import BoardHold from "../BoardHold/BoardHold";

const BoardRoute = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user?.status === "admin" ? (
        <Container>
          <BoardHold />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/account" element={<Account />} />
            <Route path="/class" element={<Class />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
          </Routes>
        </Container>
      ) : null}
    </>
  );
};

export default BoardRoute;

const Container = styled.div`
  display: flex;
  /* background-color: red; */
`;
