import { useEffect, useState } from 'react'
import { makeStyles, Grid } from '@material-ui/core'

// Component Imports
import Featured from '../UI/Featured/Featured'

// Test Data
import { homeFeaturedPosts, techweeklyFeaturedPosts } from '../../TestData/data'

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

const Home = ({ history, match }) => {

    const classes = useStyles();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        switch (match.params.category) {
            case 'techweekly':
                setPosts(techweeklyFeaturedPosts)
                break;
            case 'programmingrush':
                setPosts(techweeklyFeaturedPosts)
                break;
            case 'hardwareflu':
                setPosts(techweeklyFeaturedPosts)
                break;
            case 'monthlycrackhead':
                setPosts(techweeklyFeaturedPosts)
                break;
            default:
                setPosts(homeFeaturedPosts)
                break;
        }
    }, [match])

    if(posts.length <= 0) return <div>ERROR!!</div>

    return (
        <Grid container direction='column'>
            <Grid item className={classes.toolbar} />
            <Grid item>
                <Featured posts={posts} history={history} />
            </Grid>
        </Grid>
    )
}

export default Home
