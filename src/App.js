import React, { useState } from 'react';
import UserInput from './UserComponents/UserInput';
import UserOutput from './UserComponents/UserOutput';
import './App.css';

const App = () => {
  const [dataState, setDataState] = useState({
    data: [
      { username: '...' },
      { username: '...' },
      { username: '...' }
    ]

  });

  const ChangeUsername = (event) => {
    setDataState({
      data: [
        { username: event.target.value },
        { username: dataState.data[1].username },
        { username: dataState.data[2].username }
      ]
    })
  }

  const EventHandler = (newValue) => {
    setDataState({
      data: [
        { username: dataState.data[0].username },
        { username: newValue },
        { username: dataState.data[2].username }
      ]
    })
  }

  const EventClick = (newValue) => {
    setDataState({
      data: [
        { username: dataState.data[0].username },
        { username: dataState.data[1].username },
        { username: newValue }
      ]
    })
  }

  const EventClear = () => {
    setDataState({
      data: [
        { username: '...' },
        { username: '...' },
        { username: '...' }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Input for paragraph 1</h1>
      <UserInput username={dataState.data[0].username} change={ChangeUsername} />
      <h1>Input for paragraph 2</h1>
      <button className='change' onClick={() => EventHandler('UserChangebyButton!!!')}  >set</button>
      <button className='clear' onClick={EventClear.bind(setDataState)}  >clear</button>


      <h1>V--- Output here ---V</h1>
      <UserOutput number={1} username={dataState.data[0].username} />
      <UserOutput number={2} username={dataState.data[1].username} />
      <UserOutput number={3} username={dataState.data[2].username} click={EventClick.bind(setDataState, 'UserChangeByClick')} />

    </div>
  );
}

export default App;
