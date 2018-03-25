import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles, WithStyles } from 'material-ui/styles'

interface Props {}

const styles = theme => ({ root: { flexGrow: 1 } })

export default withStyles(styles)(
  class extends React.PureComponent<Props & WithStyles<'root'>, {}> {
    classes: any

    constructor(props) {
      super(props)
    }

    render() {
      const { classes } = this.props
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title">iSchool</Typography>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }
)
