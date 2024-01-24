import React, { useState, useReducer, useRef } from 'react';
import NewPost from './components/NewPost';
import './App.css';

export const ACTION_TYPE = {
  ADD_POST: 'add-post',
  TOGGLE: 'toggle'
};

const reducer = (post, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_POST:
      return [...post, newPost(action.payload.name)];
    case ACTION_TYPE.TOGGLE:
      return post.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, toggle: !item.toggle };
        } else {
          return item;
        }
      });
    default:
      return post;
  }
};


const newPost = (name) => {
  return { id: Date.now(), name: name, toggle: true };
};

const App = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  const [post, dispatch] = useReducer(reducer, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION_TYPE.ADD_POST, payload: { name: name } });
    setName('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  function focus(){
    inputRef.current.focus();
  }
  
  
  
  
  return (
    <div className='listBody'>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <div >
        {post.map((item) => (
          <NewPost key={item.id} post={item} dispatch={dispatch} />
        ))}
      </div>

      <button onClick={focus}>Focus</button>

    </div>
  );
};

export default App;
