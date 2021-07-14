import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IHeadCell from '../../interfaces/headCell.interface';
import IEnhancedTableProps from '../../interfaces/tableProps.interface';
import IOrderData from '../../interfaces/orderData.interface';

const headCells: IHeadCell[] = [
  {
    id: 'orderId',
    numeric: false,
    disablePadding: true,
    label: 'ORDER NUMBER & DATE',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Shipping Status',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'CUSTOMER ADDRESS',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'ORDER VALUE',
  },
];

export default function EnhancedTableHead(props: IEnhancedTableProps) {
  const { classes, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IOrderData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className={classes.tHead}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={rowCount > 0 && 5 === rowCount}
            inputProps={{ 'aria-label': 'select all orders' }}
          />
        </TableCell>
        {headCells.map((headCell, i) => (
          <TableCell
            className={i === 0 && classes.pLeft}
            key={headCell.id}
            align={headCells.length - 1 !== i ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              className={classes.tHeadText}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right" className={classes.dots}>
          <MoreVertIcon />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
