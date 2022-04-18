import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Card, Space } from 'antd';

const PostsList = () => {
   const posts = useSelector(selectAllPosts);
   console.log(posts);
   const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

   const renderedPosts = orderedPosts.map((post) => (
      <Card title={post.title} key={post.id}>
         <Card style={{ marginTop: 16 }} type="inner" title={post.content.substring(0, 100)}>
            <p className="postCredit">
               <PostAuthor userId={post.userId} />
               <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
         </Card>
      </Card>
   ));

   return (
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
         <h2>Posts</h2>
         {renderedPosts}
      </Space>
   );
};
export default PostsList;
