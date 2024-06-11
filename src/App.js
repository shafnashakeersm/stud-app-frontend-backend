
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import ViewStudent from './components/ViewStudent';
import DeleteStudent from './components/DeleteStudent';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/search' element={<SearchStudent/>}/>
        <Route path='/delete' element={<DeleteStudent/>}/>
        <Route path='/viewall' element={<ViewStudent/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
