import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import styled from 'styled-components';

function App() {
   return (
      <Container>
         <AddPostForm />
         <PostsList />
      </Container>
   );
}

const Container = styled.div`
   max-width: 960px;
   margin: 0 auto;
   background-color: #ccc;
   color: whitesmoke;
   padding: 1rem;
`;
export default App;
