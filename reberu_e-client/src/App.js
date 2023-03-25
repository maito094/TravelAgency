import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { LandingPage } from './components/LandingPage/LandingPage';
import {CreateTopic} from './components/Blog/CreateTopic';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="tm-main-content" id="top">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-topic" element={<CreateTopic />} />
        <Route path="/blogs" element={<CreateTopic />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
