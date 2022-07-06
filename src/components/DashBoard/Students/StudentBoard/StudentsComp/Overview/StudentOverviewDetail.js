import React from "react";
import styled from "styled-components";

const StudentOverviewDetail = () => {
  return (
    <DetailRow>
      <DetailRowHold>
        <h4>About Me</h4>
        <AvatarNameHold>
          <Avatar>
            <img src="" alt="" />
          </Avatar>
          <NameDetailHold>
            <Named>Jessia Rose</Named>
            <Detail>
              Aliquam erat volutpat. Curabiene natis massa sedde lacustiquen
              sodale word moun taiery.
            </Detail>
          </NameDetailHold>
        </AvatarNameHold>
        <TitleContentMain>
          <TitleContent>
            <Title>Name:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Gender:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Father's Name:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Mother's Name:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Date Of Birth:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Religion:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Father's Occupation:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Email:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Class:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Address:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
          <TitleContent>
            <Title>Parent Phone No:</Title>
            <Content>Jessia Rose</Content>
          </TitleContent>
        </TitleContentMain>
      </DetailRowHold>
    </DetailRow>
  );
};

export default StudentOverviewDetail;

const DetailRow = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 20px 0;
`;
const DetailRowHold = styled.div`
  width: 100%;
`;
const AvatarNameHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Avatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: darkcyan;
`;
const NameDetailHold = styled.div`
  width: 220px;
`;
const Named = styled.div`
  font-weight: 700;
`;
const Detail = styled.div`
  font-size: 10px;
  color: gray;
`;
const TitleContentMain = styled.div``;
const TitleContent = styled.div`
  display: flex;
  /* background-color: aqua; */
  font-size: 11px;
  margin: 12px 0;
`;
const Title = styled.div`
  margin-right: 3px;
  font-weight: 500;
  color: gray;
  width: 130px;
`;
const Content = styled.div``;
