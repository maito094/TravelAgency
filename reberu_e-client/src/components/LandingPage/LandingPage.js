import { NewsletterSection } from './NewsletterSection/NewsletterSection';
import { InfoSection } from './InformationSection/InformationSection';
import { Portfolio } from './Portfolio/Portfolio';
import { Contacts } from './Contacts/Contacts';
import { SearchBar } from '../SearchBar/SearchBar';
import { VideoSection } from '../Common/VideoSection';
import { BlogEntries } from '../Blog/BlogEntries';

export const LandingPage = () => {
  return (
    <div>
      <SearchBar />
      <NewsletterSection />
      <InfoSection />
      <Portfolio />
      <VideoSection />
      <BlogEntries />
      <Contacts />
    </div>
  );
};
