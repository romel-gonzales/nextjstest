import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/Store'
import {
  Grid,
  TableRow,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  CardMedia
} from '@material-ui/core'
import NextLink from 'next/link'

export default function CartScreen () {
  const { state } = useContext(Store)
  const {
    cart: { cartItems }
  } = state
  return (
    <Layout>
      <Typography variant='h4' component='h4'>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <NextLink href='/'>Go Shopping</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {cartItems.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <CardMedia
                                    component="img"
                                    image={item.thumbnail}
                                    title={item.title}
                                    height="60"
                                    width="60"
                                >                                    
                                </CardMedia>
                            </TableCell>
                            <TableCell align="center"><Typography>{item.title}</Typography></TableCell>
                            <TableCell align="center"><Typography>{item.price}</Typography></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </Layout>
  )
}
