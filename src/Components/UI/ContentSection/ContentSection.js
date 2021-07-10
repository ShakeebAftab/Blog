import { Grid, Typography, makeStyles, Container } from '@material-ui/core'

// Components
import ContentCard from '../ContentCard/ContentCard'

// Test Data
import { contentPosts } from '../../../TestData/data'

const useStyles = makeStyles({
    heading: {
        color: 'white',
        textAlign: 'center',
    }
})

const ContentSection = ({ heading }) => {

    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <Grid container alignItems='center' justifyContent='center' spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h5' component='h2' className={classes.heading}>
                        {heading}
                    </Typography>
                </Grid>
                {contentPosts.map(post => (
                    <Grid item md={3}>
                        <ContentCard post={post} />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    Temp
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContentSection
