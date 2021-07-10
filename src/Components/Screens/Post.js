import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'

// Test Data
import { homeFeaturedPosts } from '../../TestData/data'

// Component Imports
import PostCover from '../UI/PostCover/PostCover'

const Post = ({ match }) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        setPost(homeFeaturedPosts.filter(post => post.id.toString() === match.params.id && post.type === match.params.category)[0])
    }, [match])

    if (!post) return <div></div>

    return (
        <Grid container>
            <Grid item xs={12}>
                <PostCover post={post} />
            </Grid>
        </Grid>
    )
}

export default Post