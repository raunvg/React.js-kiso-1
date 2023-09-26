import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <Link className="top" to="/">
          <h1>掲示板</h1>
        </Link>
        <Link to="/thread/new">スレッドをたてる</Link>
      </header>
    </>
  );
};
