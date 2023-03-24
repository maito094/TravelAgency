import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { SearchBar } from './components/SearchBar/SearchBar';
import { NewsletterSection } from './components/NewsletterSection/NewsletterSection';
import { InfoSection } from './components/InformationSection/InformationSection';
import { Portfolio } from './components/Portfolio/Portfolio';
import { VideoSection } from './components/Common/VideoSection';
import { BlogEntries } from './components/Blog/BlogEntries';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="tm-main-content" id="top">
      <Header />
      <SearchBar />
      <NewsletterSection />
      <InfoSection />
      <Portfolio />
      <VideoSection />
      <BlogEntries />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
