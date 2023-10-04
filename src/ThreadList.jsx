import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ThreadList = () => {
  const [thread, setThread] = useState([]);
  async function getThreadList() {
    const url =
      'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads';
    const getData = await fetch(url, {
      method: 'GET',
    });
    const response = await getData.json();
    setThread(response);
  }
  useEffect(() => {
    getThreadList();
  }, []);
  const newThreadList = thread.map((newThread) => {
    return (
      <>
        <Link to={`/thread/${newThread.id}`}>
          <li key={newThread.id}>{newThread.title}</li>
        </Link>
      </>
    );
  });

  return (
    <div className="threadList">
      <h2>新着スレッド</h2>
      <ul>{newThreadList}</ul>
    </div>
  );
};
