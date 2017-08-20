import React from 'react'
import { TableCell, TableRow } from 'material-ui/Table';

const Flight = ({ from, to, departureTime, landingTime, price }) => (
  <TableRow>
    <TableCell>{from}</TableCell>
    <TableCell>{to}</TableCell>
    <TableCell>{departureTime}</TableCell>
    <TableCell>{landingTime}</TableCell>
    <TableCell>{price}</TableCell>
  </TableRow>
)

export default Flight