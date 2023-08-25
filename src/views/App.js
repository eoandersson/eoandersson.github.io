import '../styles/App.css';
import Homepage from './homepage/Homepage';
import Header from '../components/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div id='page-container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <footer id='footer'/>
      </BrowserRouter>
    </div>
  );
}

export default App;
