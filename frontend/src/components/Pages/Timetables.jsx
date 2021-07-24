import { AppContext } from "../../AppContext";
import { useContext } from 'react' 
import { TextField, Typography, Box } from "@material-ui/core";
import { Users } from "../../api/user.js";
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Title', headerName: 'Title', width: 130 },
    { field: 'Lecturer', headerName: 'Lecturer', width: 130 },
    { field: 'Start', headerName: 'Start', width: 180 },
    { field: 'End', headerName: 'End', width: 180 },
    { field: 'Place', headerName: 'Place', width: 130 },
    { field: 'Students', headerName: 'Students', width: 200 },
    
  ];
  
  const rows = [
    { id: 1, Title: 'Math', Lecturer: 'John Doe', Start: '01/10/2021 08:30', End: '01/10/2021 09:50', Place: 'room 103', Students: 'A,B,C'},
    { id: 2, Title: 'Databases', Lecturer: 'Jane Doe', Start: '01/10/2021 10:00', End: '01/10/2021 11:20', Place: 'room 203', Students: 'A,B,C'},
    { id: 3, Title: 'Algorithms', Lecturer: 'Adam Smith', Start: '01/10/2021 11:50', End: '01/10/2021 13:10', Place: 'room 303', Students: 'A,B,C'},
    { id: 4, Title: 'Infographics', Lecturer: 'Ellen Smith', Start: '01/10/2021 13:20', End: '01/10/2021 14:50', Place: 'room 403', Students: 'A,B,C'},
 
  ];
function Timetables() {

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}

export default Timetables;