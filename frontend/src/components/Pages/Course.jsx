import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(Course, Lecturer, Start, End) {
    return { Course, Lecturer, Start, End};
  }
  
  const rows = [
    createData('Math', 'John Doe', '01.10.2021', '31.01.2022'),
    createData('Databases', 'Jane Doe', '01.10.2021', '31.01.2022'),
    createData('Algorithms', 'Adam Smith', '01.10.2021', '31.01.2022'),
    createData('Infographics', 'Ellen Smith', '01.10.2021', '31.01.2022'),
    createData('Games', 'Bill Gates', '01.10.2021', '31.01.2022'),
  ];

function Courses() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Course</b></TableCell>
                <TableCell><b>Lecturer</b></TableCell>
                <TableCell><b>Start</b></TableCell>
                <TableCell><b>End</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Course}>
                  <TableCell component="th" scope="row">
                    {row.Course}
                  </TableCell>
                  <TableCell>{row.Lecturer}</TableCell>
                  <TableCell>{row.Start}</TableCell>
                  <TableCell>{row.End}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default Courses;