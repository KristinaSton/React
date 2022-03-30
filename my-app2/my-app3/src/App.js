import React from 'react';
import PostList from './components/PostList';
import 'bootstrap/dist/css/bootstrap.css';

const App = () =>{
  return(
    <>
    <div className='container mt-4'>
    <PostList />
    </div>
    </>
    
  );
}

export default App;
