import { Header } from './components/Header/Header';

import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="tm-main-content" id="top">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
