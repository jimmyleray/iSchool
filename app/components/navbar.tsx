import * as React from 'react'
import { AppBar, Toolbar, Typography, withStyles, WithStyles } from 'material-ui'

interface Props {}

const styles = theme => ({ root: { flexGrow: 1 } })

export default withStyles(styles)(
  class ISNavbar extends React.Component<Props & WithStyles<'root'>, {}> {
    classes: any

    constructor(props) {
      super(props)
    }

    render() {
      const { classes } = this.props
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                iSchool
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }
)
