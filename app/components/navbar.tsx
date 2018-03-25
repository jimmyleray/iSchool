import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles, WithStyles } from 'material-ui/styles'

const styles = { root: { flexGrow: 1 } }

export default withStyles(styles)(
  class extends React.PureComponent<WithStyles<'root'>, {}> {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div className={this.props.classes.root}>
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
