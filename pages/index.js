import Head from 'next/head';
import TextInput from '../components/TextInput';

import { useContext } from 'react';
import { DataContext } from '../store/globalState';

export default function Home() {
  const { state, dispatch } = useContext(DataContext);
  const { present, past, future } = state;

  const onAddInput = () => {
    dispatch({ type: 'ADD_INPUT' });
  };

  const onUndo = async () => {
    dispatch({ type: 'UNDO' });
  };

  const onRedo = async () => {
    dispatch({
      type: 'REDO',
    });
  };

  return (
    <div className="container">
      <Head>
        <title>App State</title>
        <meta name="description" content="App state" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="action">
          <button className="btn btn-add" onClick={onAddInput}>
            Add Input
          </button>
          <button
            className="btn btn-undo"
            disabled={past.length === 0 ? true : false}
            onClick={onUndo}
          >
            Undo
          </button>
          <button
            className="btn btn-redo"
            disabled={future.length === 0 ? true : false}
            onClick={onRedo}
          >
            Redo
          </button>
        </div>
        <div className="content">
          <h1>List Input</h1>
          <div className="list-input">
            {present.map((item, index) => (
              <TextInput
                content={item.content}
                dispatch={dispatch}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
