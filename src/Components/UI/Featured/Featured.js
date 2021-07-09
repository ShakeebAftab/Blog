import { Grid } from '@material-ui/core';

const Featured = () => {
    return (
        <Grid container>
            <Grid item md={6}>
                This will render featured card
            </Grid>
            <Grid item container direction="column" md={6}>
                <Grid container item md={12}>
                    <Grid item md={6}>
                        First
                    </Grid>
                    <Grid item md={6}>
                        First
                    </Grid>
                    <Grid item md={6}>
                        Second
                    </Grid>
                    <Grid item md={6}>
                        Second
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Featured;

