import React, { useState, useMemo } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Chip, Typography, Box, TableSortLabel,
} from '@mui/material';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
  
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const initialRows = [
  { id: 1, name: 'Prachi Dave', avatarUrl: 'https://cdn-icons-png.flaticon.com/128/706/706831.png', activity: 'Updated project proposal', time: '	2 min ago', status: 'Completed' },
  { id: 2, name: 'Riya Patel', avatarUrl: 'https://cdn-icons-png.flaticon.com/128/163/163847.png', activity: 'Logged 8 hours on "Website Redesign"', time: '1 hour ago', status: 'Completed' },
  { id: 3, name: 'Sneha Parmar', avatarUrl: 'https://cdn-icons-png.flaticon.com/128/6889/6889369.png', activity: 'Submitted leave request', time: '3 hours ago', status: 'Pending' },
  { id: 4, name: 'Stuti Shah', avatarUrl: 'https://cdn-icons-png.flaticon.com/128/1921/1921048.png', activity: 'Commented on "Marketing Strategy"', time: 'Yesterday', status: 'Completed' },
];

const EmployeeTable = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [rows, setRows] = useState(initialRows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = useMemo(() =>
    stableSort(rows, getComparator(order, orderBy)),
    [order, orderBy, rows]
  );

  const headCells = [
    { id: 'id', numeric: true, disableSorting: false, label: 'ID' },
    { id: 'name', numeric: false, disableSorting: false, label: 'Name' },
    { id: 'activity', numeric: false, disableSorting: true, label: 'Activity' },
    { id: 'time', numeric: false, disableSorting: false, label: 'Time' },
    { id: 'status', numeric: false, disableSorting: false, label: 'Status' },
  ];

  const CustomTableHead = (props) => {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell sx={{ fontWeight: 600, fontSize:17, color:'darkslategray' }}
              key={headCell.id}
              align={'left'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  const statusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Pending': return 'warning';
      default: return 'default';
    }
  };

  return (

    <div className="container mt-4 mb-4 p-0">
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Box p={2}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>Recent Employee Activity</Typography>
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="employee table">
          <CustomTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="left">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    <Avatar src={row.avatarUrl} alt={row.name} sx={{ mr: 2, width: 30, height: 30 }} />
                    <Typography variant="body2">{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="left">{row.activity}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">
                  <Chip label={row.status} color={statusColor(row.status)} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


export default EmployeeTable;
