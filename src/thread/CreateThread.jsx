import '../App.css';
import { useNavigate } from 'react-router-dom';

export const CreateThread = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    const element = document.querySelector('#title');
    const value = element.value;
    const title = {
      title: value,
    };
    const url =
      'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads';
    const fetchData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(title),
    };
    const check = () => {
      if (value == '') {
        alert('スレッドタイトルを入力してください');
      } else {
        navigate('/');
      }
    };
    fetch(url, fetchData)
      .then((response) => response.text())
      .then(check);
  };

  return (
    <div className="createThread">
      <h2>新規スレッドの作成</h2>
      <div className="inTitle">
        <label htmlFor="title">▼スレッドタイトルを入力してください。</label>
        <input id="title" type="text" required />
      </div>
      <button onClick={onClickButton}>スレッドを作る</button>
    </div>
  );
};
