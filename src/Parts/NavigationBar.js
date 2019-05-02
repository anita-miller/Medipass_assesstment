import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavigationBar = () => {
    return(
        <div>
            <AppBar position="static" style={{ backgroundColor: '#9736D6' }}>
                <Toolbar>
                    <Typography variant="title" color="inherit" >
                        Pie of the Day Finder
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavigationBar;