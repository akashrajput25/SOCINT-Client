import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql'
import { Grid ,Transition } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import  { AuthContext } from '../context/auth';

function Home(){
    const { user } = useContext(AuthContext);
    const { loading, data: { getPosts: posts } = {} } = useQuery( FETCH_POSTS_QUERY );
 
 return(
    <Grid columns={2}>
        <Grid.Row centered>
            <h1 class="head">CWC SOCINT</h1>
        </Grid.Row>
        <Grid.Row>
          { user && (
            <Grid.Column>
                <PostForm/>
            </Grid.Column>
          )}
            { loading ? (
               <h1>Loading Posts...</h1> 
            ) : (
                 <Transition.Group>
                    {posts && posts.map((post) =>(
                    <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                        <PostCard post ={post}/>
                    </Grid.Column>
                    ))}
                 </Transition.Group>        
            )}
        </Grid.Row>
    </Grid>
    )
}

export default Home;