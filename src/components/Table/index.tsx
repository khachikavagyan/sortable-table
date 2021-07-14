import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import { stableSort, getComparator } from '../../utils/sortFn';

import { useStyles } from './styles';

import EnhancedTableHead from '../TableHead';

import IData from '../../interfaces/data.interface';
import IOrderData from '../../interfaces/orderData.interface';

type Order = 'asc' | 'desc';

export default function EnhancedTable(props: {
  setOrderPrice: Dispatch<SetStateAction<number>>;
}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof IOrderData>('orderId');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState<IOrderData[]>([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/ryanjn/07512cb1c008a5ec754aea6cbbf4afab/raw/eabb4d324270cf0d3d17a79ffb00ff3cfaf9acc3/orders.json'
    )
      .then((resp) => resp.json())
      .then((data: IData[]) => {
        const newData = data.map((order) => ({
          orderId: order.order_number,
          ordered: order.order_details.date,
          status: order.status,
          shipingDate: order.shipping_details.date,
          address: `${order.customer.address.line1} ${order.customer.address.city}, US ${order.customer.address.zip}`,
          price: order.order_details.value,
        }));
        setRows(newData);
      });
  }, []);

  useEffect(() => {
    const orderPrice = rows.reduce((acc, curr) => acc + curr.price, 0);
    props.setOrderPrice(orderPrice);
  }, [props, rows]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IOrderData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.orderId}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox inputProps={{ 'aria-labelledby': labelId }} />
                      </TableCell>
                      <TableCell
                        className={classes.pLeft}
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <p className={classes.tMainText}># {row.orderId}</p>
                        <p className={classes.tSecondaryText}>
                          Ordered: {moment(row.ordered).format('MMM. D, YYYY')}
                        </p>
                      </TableCell>
                      <TableCell align="left">
                        <p className={(classes.tMainText, classes.status)}>
                          <span className={classes.dot}>&#9679;</span>
                          {row.status}
                        </p>
                        <p className={classes.tSecondaryText}>
                          Updated:{' '}
                          {moment(row.shipingDate).format('D/MMM/YYYY')}
                        </p>
                      </TableCell>
                      <TableCell
                        align="left"
                        className={(classes.tMainText, classes.address)}
                      >
                        {row.address}
                      </TableCell>
                      <TableCell align="right">
                        <p className={classes.tMainText}>${row.price}</p>
                        <p className={classes.tSecondaryText}>USD</p>
                      </TableCell>
                      <TableCell align="right" className={classes.dots}>
                        <MoreVertIcon />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className={classes.tHead}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
