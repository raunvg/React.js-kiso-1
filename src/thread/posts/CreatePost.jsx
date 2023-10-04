import { useState } from 'react';

export const CreatePost = (props) => {
  const id = props.id;
  const getPostsList = props.getPostsList;
  const [post, setPost] = useState([]);
  const onChange = (a) => {
    setPost(a.target.value);
  };
  async function onClickButton() {
    const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`;
    const postJson = {
      post: post,
    };
    const fetchData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postJson),
    };
    const check = () => {
      if (post == '') {
        alert('投稿内容を入力してください');
        return false;
      }
    };
    const erase = () => {
      const textinfo = document.querySelector('#postArea');
      textinfo.value = '';
    };
    const api = async () => {
      await fetch(url, fetchData).then((response) => response.text());
      await getPostsList();
      await erase();
    };

    if (check() == false) {
      return false;
    } else {
      await api();
    }
  }
  return (
    <>
      <textarea
        id="postArea"
        cols="30"
        rows="10"
        placeholder="投稿しよう！"
        onChange={onChange}
      ></textarea>
      <button onClick={onClickButton}>投稿</button>
    </>
  );
};
