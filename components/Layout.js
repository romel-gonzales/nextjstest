import { Container, Toolbar, AppBar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'

export default function Layout ({ children }) {
  const classes = useStyles()
  return (
    <div>
	  <AppBar position="relative">
		<Toolbar className={classes.navbar}>
			<Typography>AMAZONA</Typography>
		</Toolbar>
	  </AppBar>
      <div className={classes.main}>{children}</div>
      <div className={classes.footer}>
        <h3>Copyright Amazona.com, Inc. o sus afiliados</h3>
      </div>
    </div>
  )
}

