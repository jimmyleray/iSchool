import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles, WithStyles } from 'material-ui/styles'

const styles = { root: { flexGrow: 1 }, flex: { flex: 1 } }

export default withStyles(styles)(
  class extends React.PureComponent<WithStyles<'root' | 'flex'>, {}> {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div className={this.props.classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" className={this.props.classes.flex}>
                iSchool
              </Typography>
              <Button href="https://github.com/JimmyLERAY/iSchool" color="primary">
                GitHub
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }
)
