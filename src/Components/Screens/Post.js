import { useEffect, useState } from 'react'
import { Grid, Container, Box, makeStyles, Typography } from '@material-ui/core'
import Parallax from 'react-rellax'

// Test Data
import { homeFeaturedPosts } from '../../TestData/data'

// Component Imports
import PostCover from '../UI/PostCover/PostCover'

const useStyles = makeStyles({
    box: {
        minWidth: '100%',
        backgroundColor: '#171717',
        zIndex: 1
    },
    body: {
        padding: '2em',
        backgroundColor: '#3b3b3b',
        color: 'white',
        borderRadius: '20px',
        zIndex: 2
    }
})

const Post = ({ match }) => {

    const classes = useStyles()

    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(homeFeaturedPosts.filter(post => post.id.toString() === match.params.id && post.type === match.params.category)[0])
    }, [match])

    if (!post) return <div></div>

    return (
        <Box overflow='hidden' className={classes.box}>
            <Grid container direction="column" spacing={2}>
            <Parallax speed={-8}>
                <Grid item xs={12}>
                    <PostCover post={post} />
                </Grid>
            </Parallax>
                <Grid item xs={12}>
                    <Parallax speed={1}>
                        <Container maxWidth="md" className={classes.body}>
                            <Typography align='justify' variant="body1" component="h2">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates tempora, rerum fuga delectus vitae similique rem eaque, assumenda a earum repudiandae cupiditate ipsum minima? Sequi id harum reprehenderit magni est libero nemo voluptatum quasi ipsa porro odio aut necessitatibus obcaecati, numquam laboriosam explicabo vero quos vel iste saepe ex labore temporibus laudantium? Ipsum nostrum aliquam atque temporibus odit totam similique possimus ullam commodi a animi, eos unde beatae ab doloribus accusantium eius minima doloremque earum nesciunt ducimus ipsam! Sed ipsa dolore magni pariatur voluptate ducimus, maiores, asperiores vero mollitia dicta velit cumque quis explicabo accusamus architecto veniam quos. Maiores officiis ab perspiciatis praesentium ut sapiente quia quaerat in eius totam dolor laborum voluptatibus, excepturi iure tenetur explicabo officia odit eos perferendis dolorum amet laboriosam dolore accusamus! Numquam sed iusto necessitatibus sint veritatis distinctio placeat veniam recusandae at quasi, adipisci error tempore pariatur! Aliquam eius sapiente beatae eligendi temporibus ducimus consequatur pariatur dolorem deserunt maxime quaerat, maiores ad ut? Ullam voluptatibus libero pariatur amet! Minima quasi officia quia nisi natus, ut soluta facilis quae, beatae dicta ipsum cupiditate! Quisquam ex, sapiente placeat eos illo, debitis possimus iure, alias voluptatum magnam beatae. Expedita, quibusdam natus. Nesciunt blanditiis distinctio doloribus, fuga dolor vitae velit, magni alias rem perspiciatis quidem accusamus quae, doloremque eveniet quasi? Voluptas vitae nisi harum? Tempore maiores illum officiis quam ratione pariatur minus facilis voluptas quisquam. Aliquam laborum illum qui quaerat, adipisci odit odio id iure laboriosam magnam! Itaque hic obcaecati repellendus cumque, natus nostrum laudantium commodi quasi enim voluptate? Maxime, cumque. Officia, architecto! Minus sequi dicta fuga quas autem ducimus pariatur perspiciatis reprehenderit, inventore earum libero culpa commodi praesentium soluta labore? Repellendus dolorem similique velit commodi itaque eum necessitatibus atque cum aut dicta vel dignissimos adipisci harum ipsam beatae doloribus voluptates minima, suscipit corporis placeat doloremque. Ex, repellat quae?
                                </Typography> 
                        </Container>
                    </Parallax>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Post