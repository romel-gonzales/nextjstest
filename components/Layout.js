import {
  Link,
  Container,
  Toolbar,
  AppBar,
  Typography,
  Badge
} from '@material-ui/core'
import useStyles from '../utils/styles'
import NextLink from 'next/link'
import { useContext } from 'react'
import { Store } from '../utils/Store'

export default function Layout ({ children }) {
  const classes = useStyles()
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  console.log(state)
  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.navbar}>
          <NextLink href='/' passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href='/cart' passHref>
            <Link>
              <Typography>
                {cart.cartItems.length > 0 ? (
                  <Badge
                    overlap='rectangular'
                    color='secondary'
                    badgeContent={cart.cartItems.length}
                  >
                    Cart
                  </Badge>
                ) : (
                  'Cart'
                )}
              </Typography>
            </Link>
          </NextLink>
          <NextLink href='/login' passHref>
            <Link>
              <Typography>Login</Typography>
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <div className={classes.footer}>
        <h3>Copyright Amazona.com, Inc. o sus afiliados</h3>
      </div>
    </div>
  )
}
