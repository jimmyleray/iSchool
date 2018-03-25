import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles, WithStyles } from 'material-ui/styles'

interface Props {}

const styles = { root: { flexGrow: 1 } }

export default withStyles(styles)(
  class ISNavbar extends React.Component<Props & WithStyles<'root'>> {
    classes: any

    constructor(props: Props & WithStyles<'root'>) {
      super(props)
      this.classes = props.classes
    }

    render() {
      return (
        <div className={this.classes.root}>
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
