import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const CreateThread = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState([]);
  const onChange = (a) => {
    setTitle(a.target.value);
  };
  async function onClickButton() {
    const url =
      'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads';
    const titleJson = {
      title: title,
    };
    const fetchData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(titleJson),
    };
    const check = () => {
      if (title == '') {
        alert('スレッドタイトルを入力してください');
        return false;
      }
    };
    const api = () => {
      fetch(url, fetchData).then((response) => response.text());
    };
    const move = () => {
      navigate('/');
    };
    if (check() == false) {
      return false;
    } else {
      await api();
      await move();
    }
  }

  return (
    <div className="createThread">
      <h2>新規スレッドの作成</h2>
      <div className="inTitle">
        <label htmlFor="title">▼スレッドタイトルを入力してください。</label>
        <input id="title" type="text" onChange={onChange} />
      </div>
      <button onClick={onClickButton}>スレッドを作る</button>
    </div>
  );
};
