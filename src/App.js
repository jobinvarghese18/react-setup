import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
