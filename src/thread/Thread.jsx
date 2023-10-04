import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../Header';
import { CreatePost } from './posts/CreatePost';
import { PostList } from './posts/PostsList';

export const Thread = () => {
  const idObject = useParams();
  const id = idObject.thread_id;
  const [threadTitle, setThreadTitle] = useState([]);
  const [posts, setPosts] = useState([]);
  async function getThreadTitle() {
    const url =
      'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads';
    const getData = await fetch(url, {
      method: 'GET',
    });
    const response = await getData.json();
    setThreadTitle(response);
  }

  useEffect(() => {
    getThreadTitle();
  }, []);
  const h2ThreadTitle = () => {
    for (let a = 0; a < threadTitle.length; a++) {
      if (threadTitle[a].id == id) {
        return (
          <>
            <h2 className="threadTitle">{threadTitle[a].title}</h2>
          </>
        );
      }
    }
  };
  async function getPostsList() {
    const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`;
    const getData = await fetch(url, {
      method: 'GET',
    });
    const response = await getData.json();
    const getPosts = await response.posts;
    await setPosts(getPosts);
  }

  return (
    <>
      <Header />
      <div className="postList">
        {h2ThreadTitle()}
        <PostList getPostsList={getPostsList} posts={posts} />
        <CreatePost id={id} getPostsList={getPostsList} />
      </div>
    </>
  );
};
