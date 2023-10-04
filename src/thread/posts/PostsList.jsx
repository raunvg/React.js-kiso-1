import { useEffect } from 'react';

export const PostList = (props) => {
  const getPostsList = props.getPostsList;
  const posts = props.posts;

  useEffect(() => {
    getPostsList();
  }, []);

  const newPostsList = () => {
    console.log(posts);
    if (posts.length == 0) {
      return <p>このスレッドにはまだ投稿がありません。</p>;
    } else {
      const list = [];
      for (let a = 0; a < posts.length; a++) {
        list.push(<li key={posts[a].id}>{posts[a].post}</li>);
      }
      return (
        <>
          <ul>{list}</ul>
        </>
      );
    }
  };

  return <>{newPostsList()}</>;
};
