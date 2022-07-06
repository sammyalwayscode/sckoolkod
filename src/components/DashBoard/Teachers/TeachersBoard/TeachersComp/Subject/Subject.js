import * as React from "react";
import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import AddSubject from "./AddSubject";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Subject = () => {
  const { classID } = useParams();

  const [subjects, setSubjects] = React.useState([]);
  // const user = useSelector((state) => state.user);

  console.log(classID);

  const getSubjects = async () => {
    const mainURL = "";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/subject/${classID}/`;

    await axios.get(url).then((res) => {
      setSubjects(res.data.data.subject);
      console.log(res.data.data.subject);
    }, []);
  };

  React.useEffect(() => {
    getSubjects();
    // console.log(students);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <h3>All Subjects</h3>

          <AddTableSubDisplay>
            <AddSubject />
            <AllSubjectDisplay>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Subject</StyledTableCell>
                      <StyledTableCell align="right">
                        Subject Type
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Subject Teacher
                      </StyledTableCell>
                      <StyledTableCell align="right">Date</StyledTableCell>
                      <StyledTableCell align="right">...</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {subjects?.map((row) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row">
                          {row.subjectName}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.subjectType}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.subjectTeacher}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {moment(row.createdAt).format("L")}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.classCode}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AllSubjectDisplay>
          </AddTableSubDisplay>
        </Wrapper>
      </Container>
    </>
  );
};

export default Subject;

const Container = styledComponents.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
  font-family: poppins;
  position: absolute;
  z-index: 200;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styledComponents.div`
min-width: 1150px;
@media (max-width: 1150px) {
  width: 95%;
}
`;

const AddTableSubDisplay = styledComponents.div`
display: flex;
justify-content:space-between;
`;

const AllSubjectDisplay = styledComponents.div`
// height: 400px;
width: 800px;
// background-color: cyan;
`;
