import React from 'react'
import Flight from './Flight'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const FlightList = ({ flights }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>From</TableCell>
        <TableCell>To</TableCell>
        <TableCell>Departure time</TableCell>
        <TableCell>Landing time</TableCell>
        <TableCell>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
    {!flights.length ? (
      <TableRow>
        <TableCell colSpan="5">No flights listed</TableCell>
      </TableRow>
      ) : (
        flights.map(flight =>
          <Flight
            key={flight.id}
            {...flight}
          />
        )
      )}
    </TableBody>
  </Table>
)

export default FlightList