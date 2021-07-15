import { Grid, Typography, makeStyles, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

// Components
import ContentCard from '../ContentCard/ContentCard'

const useStyles = makeStyles(theme => ({
    heading: {
        color: 'white',
        textAlign: 'center',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}))

const ContentSection = ({ heading, posts, show, history }) => {

    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <Grid container alignItems='center' justifyContent='center' spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h5' component='h2' className={classes.heading}>
                        {show ? (<Link to={`/${heading.toLowerCase().replace(' ','')}`} className={classes.link}>{heading}</Link>): heading}
                    </Typography>
                </Grid>
                {posts.map(post => (
                    <Grid item md={3}>
                        <ContentCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ContentSection
