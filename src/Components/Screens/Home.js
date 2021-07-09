import { makeStyles, Grid, Hidden } from '@material-ui/core'

// Component Imports
import Featured from '../UI/Featured/Featured'

const useStyles = makeStyles(theme => ({
    toolbar: {minHeight: '64px', backgroundColor: '#000'}
}))

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Hidden xsDown>
                <Grid item className={classes.toolbar} />
            </Hidden>
            <Grid item>
                <Featured />
            </Grid>
        </Grid>
    )
}

export default Home
