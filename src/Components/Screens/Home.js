import { useEffect, useState } from 'react'
import { makeStyles, Grid, Box } from '@material-ui/core'

// Component Imports
import Featured from '../UI/Featured/Featured'
import ContentSection from '../UI/ContentSection/ContentSection'

// Test Data
import { homeFeaturedPosts, techweeklyFeaturedPosts, contentPosts } from '../../TestData/data'

const useStyles = makeStyles(theme => ({
    toolbar: {
        [theme.breakpoints.down('sm')]: {
            minHeight: '56px'
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: '64px'
        },
    },
    box: {
        minWidth: '100%',
        paddingBottom: theme.spacing(2)
    }
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
        <Box overflow='hidden' className={classes.box}>
            <Grid container direction='column' spacing={2}>
                <Grid item className={classes.toolbar} />
                <Grid item>
                    <Featured posts={posts} history={history} />
                </Grid>
                <Grid item>
                    <ContentSection show={true} history={history} heading='Tech Weekly' posts={contentPosts} />
                </Grid>
                <Grid item>
                    <ContentSection show={true} history={history} heading='Programming Rush' posts={contentPosts} />
                </Grid>
                <Grid item>
                    <ContentSection show={true} history={history} heading='Hardware Flu' posts={contentPosts} />
                </Grid>
                <Grid item>
                    <ContentSection show={true} history={history} heading='Monthly Crackhead' posts={contentPosts} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home
