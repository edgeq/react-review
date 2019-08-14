import { withRouter } from "next/router";
import axios from "axios";

const Post = ({ id, comments }) => (
  <>
    <h1>Comments for Post: {id}</h1>

    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </>
);

const Comment = ({ email, body }) => (
  <>
    <h3>{body}</h3>
    <p>{email}</p>
  </>
);

Post.getInitialProps = async ({ query }) => {
  const apiUrl = `https://jsonplaceholder.typicode.com/comments/?postId=${
    query.id
  }`;
  const res = await axios.get(apiUrl);
  const { data } = res;
  console.log(data[0]);

  return { ...query, comments: data };
};

export default Post;
