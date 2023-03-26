import { InfoSection } from './InformationSection/InformationSection';
import { Portfolio } from './Portfolio/Portfolio';
import { Contacts } from './Contacts/Contacts';
import { SearchBar } from '../SearchBar/SearchBar';
import { VideoSection } from '../Common/VideoSection';
import { PolygonSection } from '../Common/PolygonSection';
import { BlogEntries } from '../Blog/BlogEntries';

const Newletters = {
  title: 'We are here to help you?',
  subtitle: 'Subscribe to get our newsletters',
  path: '/',
  btnMsg: 'Subscribe Newletters',
};

export const LandingPage = () => {

  return (
    <div>
      <SearchBar />
      <PolygonSection {...Newletters} />
      <InfoSection />
      <Portfolio />
      <VideoSection />
      <BlogEntries />
      <Contacts />
    </div>
  );
};
