import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Profile from './components/Profile';
import Users from './components/UserList';


function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Users/>} />
    <Route path="/:login" element={<Profile/>} />
  </Routes>
</Router>
  );
}

export default App;
