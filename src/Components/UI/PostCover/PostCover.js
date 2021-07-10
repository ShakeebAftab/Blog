import {  makeStyles, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '75vh',
        padding: 0,
        margin: 0,
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            minHeight: '40vh'
        }
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        height: '100%',
        width: '100%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid: {
        textAlign: 'center'
    },
}))

const PostCover = ({ post }) => {

    const classes = useStyles()

    const { title, tagline, pic } = post

    return (
        <Grid conatiner className={classes.container} style={{backgroundImage: `url(${pic})`}}>
            <Grid container item className={classes.overlay}>
                <Grid conatiner className={classes.grid}>
                    <Grid item>
                        <Typography variant='h3' component="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" component="h2" style={{color: '#b5b5b5'}}>
                            {tagline}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PostCover