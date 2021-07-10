import { makeStyles, Grid } from '@material-ui/core'

// Component Imports
import Featured from '../UI/Featured/Featured'

// Test Data
import { homeFeaturedPosts } from '../../TestData/data'

const useStyles = makeStyles(theme => ({
    toolbar: {
        [theme.breakpoints.down('sm')]: {
            minHeight: '56px'
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: '64px'
        },
    },
}))

const Home = ({ history }) => {
    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Grid item className={classes.toolbar} />
            <Grid item>
                <Featured posts={homeFeaturedPosts} history={history} />
            </Grid>
        </Grid>
    )
}

export default Home
