import './App.css';
import Users from './Components/Users/Users';
import NavBar from './Components/NavBar/NavBar';
import NewUser from './Components/Users/New_User/NewUser';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
  <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/addUser' element={<NewUser/>}/>
      </Routes>
      {/* <footer className='Footer'>
        <p>Developed by Zayn</p>
        <p>0341-1324242</p>
      </footer> */}
  </>
  );
}

export default App;
