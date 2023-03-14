import {
    Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { ICalendar } from "../../types/index.dto";

interface IProps {
  data: ICalendar[];
}
const CalendarTable: React.FC<IProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>номер тура</TableCell>
            <TableCell>команда хозяев</TableCell>
            <TableCell>команда гостей</TableCell>
            <TableCell>дата матча</TableCell>
            <TableCell>счёт гостями</TableCell>
            <TableCell>счёт хозяевами</TableCell>
            <TableCell>название стадиона</TableCell>
            <TableCell align="right">лого</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tourNumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.teamHome.name}
              </TableCell>
              <TableCell>{row.teamAway.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.scoreFtHome}</TableCell>
              <TableCell>{row.scoreFtAway}</TableCell>
              <TableCell>{row.stadium?.name}</TableCell>
              <TableCell align="right">
                <Avatar alt="Remy Sharp" src={`https://footballista.ru/api/img/logos/${row.teamHome?.logo}-middle.png?logoId=${row.teamHome?.logoId}`} />
              </TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CalendarTable;
