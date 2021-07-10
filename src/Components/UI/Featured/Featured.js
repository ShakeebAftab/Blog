import { Grid } from '@material-ui/core';

// Components
import FeaturedCard from '../FeaturedCard/FeaturedCard'

const Featured = ({ posts, history }) => {
    return (
        <Grid container style={{minHeight: '60vh'}}>
            <Grid item xs={12} md={6}>
                <FeaturedCard variant="h4" post={posts[0]} history={history} />
            </Grid>
            <Grid item container direction="column" md={6}>
                <Grid container item xs={12}>
                    {posts.map((post, idx) => idx !== 0 && (
                        <Grid item xs={12} md={6}>
                            <FeaturedCard variant="h5" post={post} history={history} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Featured;

