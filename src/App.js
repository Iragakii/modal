
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Routes>
          <Route path='/modal' element={<Modal></Modal>}></Route>
        </Routes>
        <Routes>
          <Route path='/detail' element={<Details></Details>}></Route>
        </Routes>
    </>
  );
}

export default App;
