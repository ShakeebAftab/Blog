import { Container, makeStyles, Typography, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        padding: 0,
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            minHeight: '30vh'
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
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8)',
            cursor: 'pointer'
        }
    },
    grid: {
        textAlign: 'center'
    },
    button: {
        marginTop: '8px'
    },
}))

const FeaturedCard = ({ variant, post, history }) => {
    
    const classes = useStyles()

    const { id, title, tagline, pic, type } = post

    const onClickHandler = () => history.push(`/${type}/${id}`)

    return (
        <Container className={classes.container} style={{backgroundImage: `url(${pic})`}} onClick={() => onClickHandler()}>
            <Container className={classes.overlay}>
                <Grid conatiner className={classes.grid}>
                    <Grid item>
                        <Typography variant={variant} component="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" component="h2" style={{color: '#b5b5b5'}}>
                            {tagline}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.button}>
                        <Button variant='outlined' color='secondary' onClick={() => onClickHandler()} size={variant === "h4" ? `large` : `small`} >Read More</Button>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default FeaturedCard
